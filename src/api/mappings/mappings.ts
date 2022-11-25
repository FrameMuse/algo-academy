import { APISchemas } from "api/data"
import { LessonStatus } from "app/areas/lesson/types"
import { PricingPlan } from "app/areas/purchase/types"
import { USER_GUEST } from "store/reducers/user"
import { User, UserType } from "store/reducers/user/types"
import { ProgressEntry } from "utils/transform/progress"

export function mapUser(schema: APISchemas.User): User {
  return {
    id: schema.id,

    avatar: schema.avatar?.data ?? USER_GUEST["avatar"],
    firstName: schema.first_name,
    lastName: schema.last_name,
    userName: schema.display_name ?? "",

    email: schema.email,
    level: schema.rank,

    createdAt: new Date(schema.date_of_creation),

    pricingPlan: schema.current_plan ? mapPricingPlan(schema.current_plan) : undefined,
    type: mapUserType(schema.role),
    signed: true
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
  // schema.
}



export function mapCurriculum(schema: APISchemas.Curriculum) {
  return {
    title: schema.name,
    lessons: schema.list.map(mapLessonPreview)
  }
}

function mapLessonPreview(schema: APISchemas.Curriculum["list"][0]) {
  return {
    id: schema.id,
    title: schema.name,
    status: mapLessonPreviewStatus(schema.status)
  }
}

function mapLessonPreviewStatus(schema: APISchemas.Curriculum["list"][0]["status"]): LessonStatus {


  return LessonStatus.Unknown
}

export function unmapLessonPreviewStatus(value: LessonStatus): APISchemas.Curriculum["list"][0]["status"] {
  return ""
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


interface Curriculum {
  progress: ProgressEntry
  topics: CurriculumTopic[]
}

interface CurriculumTopic {
  title: string
  groups: CurriculumTopicGroup[]
  progress: ProgressEntry
}

interface CurriculumTopicGroup {
  title: string
  lessons: Lesson[]
}

interface Lesson {
  title: string
  status: LessonStatus
}
