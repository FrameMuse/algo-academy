import { APISchemas } from "api/data"
import { LessonMultipleContent, LessonStatus, LessonType } from "app/areas/lesson/types"
import { Plan, Purchase } from "app/areas/purchase/types"
import { ICodeSubmitionResult } from "app/areas/workspace/types"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { Buffer } from "buffer"
import { USER_GUEST } from "store/reducers/user"
import { User, UserType } from "store/reducers/user/types"
import BiMap from "utils/transform/bimap"

export function mapUser(schema: APISchemas.User): User {
  const avatar = mapUserAvatar(schema.avatar)

  return {
    id: schema.id,

    avatar,
    firstName: schema.first_name,
    lastName: schema.last_name,
    userName: schema.display_name ?? "",

    email: schema.email,
    level: schema.rank,

    createdAt: new Date(schema.date_of_creation),

    pricingPlan: schema.current_plan ? mapPurchase(schema.current_plan) : undefined,
    type: userType.forward(schema.role),
    signed: true,
  }
}

function mapUserAvatar(schema: APISchemas.User["avatar"]): string {
  if (schema == null) {
    return USER_GUEST["avatar"]
  }

  if (typeof schema === "object") {
    const buffer = Buffer.from(schema.data, "base64")
    const blob = new Blob([buffer], { type: schema.contentType })

    const url = URL.createObjectURL(blob)
    return url
  }

  return schema
}

export function mapChaptersProgress(schema: APISchemas.User["progress"][0]) {
  return {
    id: schema.chapter_id,
    title: schema.chapter_name,
    lessons: schema.lessons.map(lesson => ({
      id: lesson.id,
      status: lessonStatus.forward(lesson.status)
    }))
  }
}


export function mapPlan(schema: APISchemas.SubscriptionResponse): Plan {
  return {
    id: schema.id,
    title: schema.title,
    description: schema.subtitle,
    cost: schema.cost,
    durationMonths: mapPlanDurationForward(schema.period),
    benefits: schema.descriptions,
    mostPopular: schema.most_popular
  }
}

/**
 * @returns amount of months.
 */
export function mapPlanDurationForward(period: string): number {
  period = period.toLowerCase()

  type Item = `${number}${("y" | "m" | "d")}`

  const items = period.split("-") as [string, ...Item[]]

  return items.reduce((result, nextItem) => {
    const [value, type] = nextItem.split("") as [string, "y" | "m" | "d"]
    const valueNumber = Number(value)

    switch (type) {
      case "d":
        return result + Math.floor(valueNumber / 30)
      case "m":
        return result + valueNumber
      case "y":
        return result + valueNumber * 12
      default:
        return result
    }
  }, 0)
}

export function mapPlanDurationBackward(months: number): string {
  return `${months}m`
}

export function mapPurchase(schema: APISchemas.Plan): Purchase {
  return {
    title: schema.plan_name,
    purchaseDate: new Date(schema.purchase_date),
    receiptId: schema.receipt_id,
    totalCost: Number(schema.total_cost)
  }
}


export function mapLesson(schema: APISchemas.LessonUserResponse | APISchemas.LessonAdminResponse) {
  return {
    id: schema.id,
    free: schema.free,
    title: schema.name,
    type: lessonType.forward(schema.type),
    chapterRelation: schema.used_in ? {
      id: schema.used_in.chapter_id,
      title: schema.used_in.chapter_name,
    } : undefined,

    content: schema.content ?? "",

    statement: schema.statement ?? "",
    hints: schema.hints ?? "",
    contents: schema.resources?.map(mapLessonContent) ?? []
  }
}

function mapLessonContent(schema: NonNullable<APISchemas.LessonUserResponse["resources"]>[0] | NonNullable<APISchemas.LessonAdminResponse["resources"]>[0]): LessonMultipleContent {
  return {
    solution: schema.solution ?? "",
    language: editorLanguage.forward(schema.language),
    tests: schema.tests,
    testsValidation: ("validation_func" in schema ? schema.validation_func : ""),
    startingCode: schema.default_code
  }
}



export function mapChapter(schema: APISchemas.ChapterResponse) {
  return {
    id: schema.id,
    order: schema.order_number,
    title: schema.name,
    published: schema.published,
    showInProfile: schema.user_topic,
    lessons: schema.list.map(mapLessonPreview)
  }
}

function mapLessonPreview(schema: APISchemas.Chapter["list"][0]) {
  return {
    id: schema.id,
    free: schema.free,
    title: schema.name,
    type: lessonType.forward(schema.type)
  }
}

export function mapSnippet(schema: APISchemas.SnippetResponse) {
  return {
    id: schema.id,
    label: schema.name,
    content: schema.code,
    language: editorLanguage.forward(schema.language),
    space: schema.space_complex,
    runTime: schema.time_complex
  }
}

export function mapJudge0Result(schema: APISchemas.JudgeResult): ICodeSubmitionResult {
  return {
    time: Number(schema.time) || 0,
    memory: schema.memory || 0,
    tests: schema.compile_output || [],
    status: schema.status
  }
}

export function mapPromocode(schema: APISchemas.PromoResponse) {
  return {
    id: schema.id,
    name: schema.name,
    discountPercentage: schema.discount_percent
  }
}

export const userType = new BiMap<APISchemas.User["role"], UserType>({
  "admin": UserType.Admin,
  "user": UserType.Default
})

export const editorLanguage = new BiMap<NonNullable<APISchemas.Lesson["resources"]>[0]["language"], EditorLanguage>({
  5: EditorLanguage.Java,
  51: EditorLanguage["C#"],
  63: EditorLanguage.JavaScript,
  64: EditorLanguage.Lua,
  68: EditorLanguage.PHP,
  70: EditorLanguage.Python,
  71: EditorLanguage.Python,
  72: EditorLanguage.Ruby,
  74: EditorLanguage.TypeScript,
  79: EditorLanguage["Objective-C"],
  80: EditorLanguage.R,
  87: EditorLanguage["F#"],
  89: EditorLanguage["C++"]
})

export const lessonStatus = new BiMap<APISchemas.User["progress"][0]["lessons"][0]["status"], LessonStatus>({
  "Completed": LessonStatus.Complete,
  "Not Completed": LessonStatus.Incomplete,
  "Needs Review": LessonStatus.NeedsReviews
})

export const lessonType = new BiMap<APISchemas.Lesson["type"], LessonType>({
  "learning": LessonType.Learning,
  "practice": LessonType.Practice
})
