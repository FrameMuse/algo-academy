import { APISchemas } from "api/data"
import { LessonStatus } from "app/areas/lesson/types"
import { PricingPlan } from "app/areas/purchase/types"
import { USER_GUEST } from "store/reducers/user"
import { User, UserType } from "store/reducers/user/types"
import { ProgressEntry } from "utils/transform/progress"

export function mapUser(schema: APISchemas.User): User {
  return {
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
