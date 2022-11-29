import { APISchemas } from "api/data"
import { LessonStatus, LessonType } from "app/areas/lesson/types"
import { PricingPlan } from "app/areas/purchase/types"
import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"
import { USER_GUEST } from "store/reducers/user"
import { User, UserType } from "store/reducers/user/types"

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
    type: mapUserType(schema.role),
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

export function mapUserType(schema: APISchemas.User["role"]): UserType {
  if (schema === "admin") {
    return UserType.Admin
  }

  return UserType.Default
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
    type: mapLessonType(schema.type),
    chapterRelationId: schema.used_in[0] ?? "",
    status: mapLessonStatus(schema.status),

    content: schema.content ?? "unknown",

    statement: schema.statement ?? "unknown",
    hints: schema.hints ?? "unknown",
    resources: schema.resources?.map(mapLessonResource) ?? []
  }
}

function mapLessonResource(schema: NonNullable<APISchemas.Lesson["resources"]>[0]) {
  return {
    solution: schema.solution,
    language: mapLessonResourceLanguage(schema.language),
    notes: schema.notes,
    tests: schema.tests,
    defaultCode: schema.default_code
  }
}

function mapLessonResourceLanguage(schema: NonNullable<APISchemas.Lesson["resources"]>[0]["language"]): EditorLanguage {
  switch (schema) {
    case 74:
      return EditorLanguage.TypeScript

    default:
      return EditorLanguage.Python
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
    status: mapLessonStatus(schema.status)
  }
}

function mapLessonStatus(schema: APISchemas.Lesson["status"]): LessonStatus {
  switch (schema) {
    case "Completed":
      return LessonStatus.Complete
    case "Not Completed":
      return LessonStatus.Incomplete
    case "Needs Review":
      return LessonStatus.NeedsReviews

    default:
      return LessonStatus.Complete
  }
}

export function unmapLessonStatus(value: LessonStatus): APISchemas.Lesson["status"] {
  switch (value) {
    case LessonStatus.Complete:
      return "Completed"
    case LessonStatus.Incomplete:
      return "Not Completed"
    case LessonStatus.NeedsReviews:
      return "Needs Review"

    default:
      return "Not Completed"
  }
}

export function mapLessonType(schema: APISchemas.Lesson["type"]): LessonType {
  switch (schema) {
    case "learning":
      return LessonType.Learning
    case "practice":
      return LessonType.Practice

    default:
      return LessonType.Learning
  }
}

export function unmapLessonType(value: LessonType): APISchemas.Lesson["type"] {
  switch (value) {
    case LessonType.Learning:
      return "learning"
    case LessonType.Practice:
      return "practice"

    default:
      return "learning"
  }
}


// /**
//  * https://www.google.com/search?q=bidirectional+map+js&oq=bidirectional+map+js&aqs=chrome..69i57.2532j0j7&sourceid=chrome&ie=UTF-8
//  * https://www.google.com/search?q=bilateral+mapping+npm
//  * https://startfunction.com/2020/11/26/bidirectional-map-javascript/#initialize
//  * https://startfunction.com/bidirectional-map-javascript/
//  * https://www.npmjs.com/package/bi-directional-map
//  */
// class BiMap {
//   forwardMap = {}
//   reversedMap = {}

//   constructor(mapping: Record<string, string>) {
//     this.forwardMap = { ...mapping }
//     this.reversedMap = Object.keys(mapping).reduce((result, key) => ({
//       ...result,
//       [mapping[key]]: key
//     }), {})
//   }
// }


// interface ProgressEntry {
//   completed: number
//   total: number
// }
