import { APISchemas } from "api/data"
import { LessonMultipleContent, LessonStatus, LessonType } from "app/areas/lesson/types"
import { PricingPlan } from "app/areas/purchase/types"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { USER_GUEST } from "store/reducers/user"
import { User, UserType } from "store/reducers/user/types"
import BiMap from "utils/transform/bimap"

export function mapUser(schema: APISchemas.User): User {
  return {
    id: schema.id,

    avatar: schema.avatar || USER_GUEST["avatar"],
    firstName: schema.first_name,
    lastName: schema.last_name,
    userName: schema.display_name ?? "",

    email: schema.email,
    level: schema.rank,

    createdAt: new Date(schema.date_of_creation),

    pricingPlan: schema.current_plan ? mapPricingPlan(schema.current_plan) : undefined,
    type: userType.mapForward(schema.role),
    signed: true,
  }
}

export function mapChapterProgress(schema: APISchemas.User["progress"][0]) {
  return {
    id: schema.chapter_id,
    title: schema.chapter_name,
    progress: {
      completed: schema.lessons.completed,
      total: schema.lessons.all
    }
  }
}

export function mapPricingPlan(schema: APISchemas.Plan): PricingPlan {
  return {
    name: schema.plan_name,
    purchaseDate: new Date(schema.purchase_date),
    receiptId: schema.receipt_id,
    totalCost: Number(schema.total_cost)
  }
}


export function mapLesson(schema: APISchemas.Lesson) {
  return {
    id: schema.id,
    title: schema.name,
    type: lessonType.mapForward(schema.type),
    chapterRelation: schema.used_in ? {
      id: schema.used_in.chapter_id,
      title: schema.used_in.chapter_name,
    } : undefined,
    status: lessonStatus.mapForward(schema.status),

    content: schema.content ?? "",

    statement: schema.statement ?? "",
    hints: schema.hints ?? "",
    resources: schema.resources?.map(mapLessonResource) ?? []
  }
}

function mapLessonResource(schema: NonNullable<APISchemas.Lesson["resources"]>[0]): LessonMultipleContent {
  return {
    solution: schema.solution ?? "",
    language: resourceLanguage.mapForward(schema.language),
    notes: schema.notes,
    tests: schema.tests,
    defaultCode: schema.default_code
  }
}



export function mapChapter(schema: APISchemas.Chapter) {
  return {
    id: schema.id,
    order: schema.order_number,
    title: schema.name,
    showInProfile: schema.user_topic,
    learningLessons: schema.learning_list.map(mapLessonPreview),
    practiceLessons: schema.practice_list.map(mapLessonPreview)
  }
}

function mapLessonPreview(schema: APISchemas.Chapter["learning_list"][0]) {
  return {
    id: schema.id,
    title: schema.name,
    status: lessonStatus.mapForward(schema.status)
  }
}


export const userType = new BiMap<APISchemas.User["role"], UserType>({
  "admin": UserType.Admin,
  "user": UserType.Default
})


export const resourceLanguage = new BiMap<NonNullable<APISchemas.Lesson["resources"]>[0]["language"], EditorLanguage>({
  51: EditorLanguage["C#"],
  62: EditorLanguage.Java,
  63: EditorLanguage.JavaScript,
  64: EditorLanguage.Lua,
  68: EditorLanguage.PHP,
  72: EditorLanguage.Ruby,
  74: EditorLanguage.TypeScript,
  75: EditorLanguage["C++"],
  79: EditorLanguage["Objective-C"],
  70: EditorLanguage.Python,
  71: EditorLanguage.Python,
  80: EditorLanguage.R,
  87: EditorLanguage["F#"]
})

export const lessonStatus = new BiMap<APISchemas.Lesson["status"], LessonStatus>({
  "Completed": LessonStatus.Complete,
  "Not Completed": LessonStatus.Incomplete,
  "Needs Review": LessonStatus.NeedsReviews
})

export const lessonType = new BiMap<APISchemas.Lesson["type"], LessonType>({
  "learning": LessonType.Learning,
  "practice": LessonType.Practice
})
