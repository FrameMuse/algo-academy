/**
 * 
 * This is auto-generated file.
 * All edits will not be preserved for the next generation.
 * 
 * GitHub: https://github.com/FrameMuse/swagger-export-rfl
 * 
*/

import { QueryAction } from "../types"
import {
  CreateUser,
  Curriculum,
  JudgeConfig,
  JudgeLanguage,
  JudgeLanguages,
  JudgeResult,
  JudgeStatuses,
  Lesson,
  Promo,
  Stripe,
  User
} from "./schemas"
/**
 * Authorization with google.
 */
export const getOauth2Google = (): QueryAction => ({
  method: "GET",
  endpoint: `/oauth2/google`
})

/**
 * Authorization with facebook.
 */
export const getOauth2Facebook = (): QueryAction => ({
  method: "GET",
  endpoint: `/oauth2/facebook`
})

/**
 * Authorization with github.
 */
export const getOauth2Github = (): QueryAction => ({
  method: "GET",
  endpoint: `/oauth2/github`
})

/**
 * Clear cookie info and redirect to '/'.
 */
export const postOauth2Logout = (): QueryAction => ({
  method: "POST",
  endpoint: `/oauth2/logout`
})

/**
 * Get information about all users. This can only be done by an administrator.
 */
export const getUsers = (): QueryAction<User[]> => ({
  method: "GET",
  endpoint: `/users`
})

/**
 * This can only be done by an administrator.
 */
export const postUsers = (body: CreateUser): QueryAction<User> => ({
  method: "POST",
  endpoint: `/users`,
  body
})

/**
 * This can only be done by an administrator.
 */
export const deleteUsersId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/users/${id}`
})

/**
 * Get information about yourself. Only for authorized users.
 */
export const getUsersMe = (): QueryAction<User> => ({
  method: "GET",
  endpoint: `/users/me`
})

/**
 * Update information about yourself. Only for authorized users.
 */
export const patchUsersMe = (body: Partial<User>): QueryAction<User> => ({
  method: "PATCH",
  endpoint: `/users/me`,
  body
})

/**
 * Update avatar. Only for authorized users.
 */
export const patchUsersMeAvatar = (body: {
  avatar: string
}): QueryAction<{
  data: string
  contentType: string
}> => ({
  method: "PATCH",
  endpoint: `/users/me/avatar`,
  body,
  contentType: "formData"
})

/**
 * Revoke access to your account. Only for authorized users.
 */
export const postUsersRevokeAccessMe = (): QueryAction<User> => ({
  method: "POST",
  endpoint: `/users/revoke-access/me`
})

/**
 * Get information about all lessons. Only for authorized users.
 */
export const getLessons = (): QueryAction<Lesson[]> => ({
  method: "GET",
  endpoint: `/lessons`
})

/**
 * This can only be done by an administrator.
 */
export const postLessons = (body: Lesson): QueryAction<Lesson> => ({
  method: "POST",
  endpoint: `/lessons`,
  body
})

/**
 * Get information about lesson. Only for authorized users.
 */
export const getLessonsId = (id: string): QueryAction<Lesson> => ({
  method: "GET",
  endpoint: `/lessons/${id}`
})

/**
 * Update information about lesson. This can only be done by an administrator.
 */
export const patchLessonsId = (id: string, body: Lesson): QueryAction<Lesson> => ({
  method: "PATCH",
  endpoint: `/lessons/${id}`,
  body
})

/**
 * This can only be done by an administrator.
 */
export const deleteLessonsId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/lessons/${id}`
})

/**
 * Get information about all curriculums. Only for authorized users.
 */
export const getCurriculums = (): QueryAction<Curriculum[]> => ({
  method: "GET",
  endpoint: `/curriculums`
})

/**
 * This can only be done by an administrator.
 */
export const postCurriculums = (body: {
  name: string
  order_number: number
  user_topic: boolean
  list: string[]
}): QueryAction<Curriculum> => ({
  method: "POST",
  endpoint: `/curriculums`,
  body
})

/**
 * Get information about curriculum. Only for authorized users.
 */
export const getCurriculumsId = (id: string): QueryAction<Curriculum> => ({
  method: "GET",
  endpoint: `/curriculums/${id}`
})

/**
 * Update information about curriculum. This can only be done by an administrator.
 */
export const patchCurriculumsId = (id: string, body: {
  name: string
  order_number: number
  user_topic: boolean
  list: string[]
}): QueryAction<Curriculum> => ({
  method: "PATCH",
  endpoint: `/curriculums/${id}`,
  body
})

/**
 * This can only be done by an administrator.
 */
export const deleteCurriculumsId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/curriculums/${id}`
})

/**
 * This can only be done by an administrator.
 */
export const getPromo = (): QueryAction<Promo[]> => ({
  method: "GET",
  endpoint: `/promo`
})

/**
 * This can only be done by an administrator.
 */
export const postPromo = (body: Promo): QueryAction<Promo> => ({
  method: "POST",
  endpoint: `/promo`,
  body
})

/**
 * promo success
 */
export const postPromoCheck = (body: Promo): QueryAction => ({
  method: "POST",
  endpoint: `/promo/check`,
  body
})

/**
 * Only for authorized users.
 */
export const getPromoId = (id: string): QueryAction<Promo> => ({
  method: "GET",
  endpoint: `/promo/${id}`
})

/**
 * This can only be done by an administrator.
 */
export const patchPromoId = (id: string, body: Promo): QueryAction<Promo> => ({
  method: "PATCH",
  endpoint: `/promo/${id}`,
  body
})

/**
 * This can only be done by an administrator.
 */
export const deletePromoId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/promo/${id}`
})

export const getJudge0ConfigInfo = (): QueryAction<JudgeConfig> => ({
  method: "GET",
  endpoint: `/judge0/config_info`
})

export const getJudge0Statuses = (): QueryAction<JudgeStatuses[]> => ({
  method: "GET",
  endpoint: `/judge0/statuses`
})

export const getJudge0Languages = (): QueryAction<JudgeLanguages[]> => ({
  method: "GET",
  endpoint: `/judge0/languages`
})

export const getJudge0LanguagesId = (id: string): QueryAction<JudgeLanguage> => ({
  method: "GET",
  endpoint: `/judge0/languages/${id}`
})

export const postJudge0Compile = (body: {
  curriculum_id: string
  curriculum_name: string
  lesson_id: string
  language_id: number
  source_code: string
  stdin: string
}): QueryAction<JudgeResult> => ({
  method: "POST",
  endpoint: `/judge0/compile`,
  body
})

/**
 * Tariff plan payment
 */
export const postStripeCreateCharge = (body: Stripe): QueryAction<{
  receipt_url: string
}> => ({
  method: "POST",
  endpoint: `/stripe/create-charge`,
  body
})
