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
  Chapter,
  CreateUser,
  Feedback,
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
  endpoint: `/oauth2/google`,
  operationId: "googleAuth"
})

/**
 * Authorization with facebook.
 */
export const getOauth2Facebook = (): QueryAction => ({
  method: "GET",
  endpoint: `/oauth2/facebook`,
  operationId: "facebookAuth"
})

/**
 * Authorization with github.
 */
export const getOauth2Github = (): QueryAction => ({
  method: "GET",
  endpoint: `/oauth2/github`,
  operationId: "githubAuth"
})

/**
 * Clear cookie info and redirect to '/'.
 */
export const postOauth2Logout = (): QueryAction => ({
  method: "POST",
  endpoint: `/oauth2/logout`,
  operationId: "logoutUser"
})

/**
 * Get information about all users. This can only be done by an administrator.
 */
export const getUsers = (): QueryAction<User[]> => ({
  method: "GET",
  endpoint: `/users`,
  operationId: "allUser"
})

/**
 * This can only be done by an administrator.
 */
export const postUsers = (body: CreateUser): QueryAction<User> => ({
  method: "POST",
  endpoint: `/users`,
  body,
  operationId: "createUser"
})

/**
 * This can only be done by an administrator.
 */
export const patchUsersId = (id: string, body: Partial<User>): QueryAction<User> => ({
  method: "PATCH",
  endpoint: `/users/${id}`,
  body,
  operationId: "updateuserByIdUser"
})

/**
 * This can only be done by an administrator.
 */
export const deleteUsersId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/users/${id}`,
  operationId: "deleteUser"
})

/**
 * Get information about yourself. Only for authorized users.
 */
export const getUsersMe = (): QueryAction<User> => ({
  method: "GET",
  endpoint: `/users/me`,
  operationId: "yourselfUser"
})

/**
 * Update information about yourself. Only for authorized users.
 */
export const patchUsersMe = (body: Partial<User>): QueryAction<User> => ({
  method: "PATCH",
  endpoint: `/users/me`,
  body,
  operationId: "updateYourselfUser"
})

/**
 * Update avatar. Only for authorized users.
 */
export const patchUsersMeAvatar = (body: Partial<{
  avatar: string
}>): QueryAction<{
  data: string
  contentType: string
}> => ({
  method: "PATCH",
  endpoint: `/users/me/avatar`,
  body,
  contentType: "formData",
  operationId: "updateYourselfAvatar"
})

/**
 * Update progress. Only for authorized users.
 */
export const patchUsersMeProgress = (body: Partial<{
  chapter_id: string
  chapter_name: string
  lesson_id: string
  status: string
}>): QueryAction => ({
  method: "PATCH",
  endpoint: `/users/me/progress`,
  body,
  operationId: "updateYourselfProgress"
})

/**
 * Revoke access to your account. Only for authorized users.
 */
export const postUsersRevokeAccessMe = (): QueryAction<User> => ({
  method: "POST",
  endpoint: `/users/revoke-access/me`,
  operationId: "revokeUser"
})

/**
 * Get information about all lessons. Only for authorized users.
 */
export const getLessons = (): QueryAction<Lesson[]> => ({
  method: "GET",
  endpoint: `/lessons`,
  operationId: "allLessons"
})

/**
 * This can only be done by an administrator.
 */
export const postLessons = (body: Partial<Lesson>): QueryAction<Lesson> => ({
  method: "POST",
  endpoint: `/lessons`,
  body,
  operationId: "createLesson"
})

/**
 * Learning lessons unused in chapter. This can only be done by an administrator.
 */
export const getLessonsUnused = (): QueryAction<Lesson[]> => ({
  method: "GET",
  endpoint: `/lessons/unused`,
  operationId: "ununsedLessons"
})

/**
 * Get information about lesson. Only for authorized users.
 */
export const getLessonsId = (id: string): QueryAction<Lesson> => ({
  method: "GET",
  endpoint: `/lessons/${id}`,
  operationId: "lessonById"
})

/**
 * Update information about lesson. This can only be done by an administrator.
 */
export const patchLessonsId = (id: string, body: Partial<Lesson>): QueryAction<Lesson> => ({
  method: "PATCH",
  endpoint: `/lessons/${id}`,
  body,
  operationId: "updateLesson"
})

/**
 * This can only be done by an administrator.
 */
export const deleteLessonsId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/lessons/${id}`,
  operationId: "deleteLesson"
})

/**
 * Update information resources. This can only be done by an administrator.
 */
export const patchLessonsIdResourcesLanguageId = (language_id: number, id: string, body: Partial<NonNullable<Lesson["resources"]>[0]>): QueryAction => ({
  method: "PATCH",
  endpoint: `/lessons/${id}/resources/${language_id}`,
  body,
  operationId: "updateResourcesLesson"
})

/**
 * Get information about all chapters. Only for authorized users.
 */
export const getChapters = (): QueryAction<Chapter[]> => ({
  method: "GET",
  endpoint: `/chapters`,
  operationId: "allChapters"
})

/**
 * This can only be done by an administrator.
 */
export const postChapters = (body: {
  name: string
  order_number: number
  user_topic: boolean
  list?: string[] | null
}): QueryAction<Chapter> => ({
  method: "POST",
  endpoint: `/chapters`,
  body,
  operationId: "createChapter"
})

/**
 * Get information about chapter. Only for authorized users.
 */
export const getChaptersId = (id: string): QueryAction<Chapter> => ({
  method: "GET",
  endpoint: `/chapters/${id}`,
  operationId: "chapterById"
})

/**
 * Update information about chapter. This can only be done by an administrator.
 */
export const patchChaptersId = (id: string, body: Partial<{
  name: string
  order_number: number
  user_topic: boolean
  list: string[] | null
}>): QueryAction<Chapter> => ({
  method: "PATCH",
  endpoint: `/chapters/${id}`,
  body,
  operationId: "updateChapter"
})

/**
 * This can only be done by an administrator.
 */
export const deleteChaptersId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/chapters/${id}`,
  operationId: "deleteChapter"
})

/**
 * This can only be done by an administrator.
 */
export const getPromo = (): QueryAction<Promo[]> => ({
  method: "GET",
  endpoint: `/promo`,
  operationId: "allPromo"
})

/**
 * This can only be done by an administrator.
 */
export const postPromo = (body: Promo): QueryAction<Promo> => ({
  method: "POST",
  endpoint: `/promo`,
  body,
  operationId: "createPromo"
})

/**
 * promo success
 */
export const postPromoCheck = (body: Promo): QueryAction => ({
  method: "POST",
  endpoint: `/promo/check`,
  body,
  operationId: "checkPromo"
})

/**
 * Only for authorized users.
 */
export const getPromoId = (id: string): QueryAction<Promo> => ({
  method: "GET",
  endpoint: `/promo/${id}`,
  operationId: "promoById"
})

/**
 * This can only be done by an administrator.
 */
export const patchPromoId = (id: string, body: Partial<Promo>): QueryAction<Promo> => ({
  method: "PATCH",
  endpoint: `/promo/${id}`,
  body,
  operationId: "updatePromo"
})

/**
 * This can only be done by an administrator.
 */
export const deletePromoId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/promo/${id}`,
  operationId: "deletePromo"
})

/**
 * This can only be done by an administrator.
 */
export const getFeedbacks = (): QueryAction<Feedback[]> => ({
  method: "GET",
  endpoint: `/feedbacks`,
  operationId: "allFeedback"
})

/**
 * Sending feedback
 */
export const postFeedbacks = (body: Feedback): QueryAction => ({
  method: "POST",
  endpoint: `/feedbacks`,
  body,
  operationId: "createFeedback"
})

export const getJudge0ConfigInfo = (): QueryAction<JudgeConfig> => ({
  method: "GET",
  endpoint: `/judge0/config_info`,
  operationId: "judgeConfig"
})

export const getJudge0Statuses = (): QueryAction<JudgeStatuses[]> => ({
  method: "GET",
  endpoint: `/judge0/statuses`,
  operationId: "judgeStatuses"
})

export const getJudge0Languages = (): QueryAction<JudgeLanguages[]> => ({
  method: "GET",
  endpoint: `/judge0/languages`,
  operationId: "judgeLanguages"
})

export const getJudge0LanguagesId = (id: string): QueryAction<JudgeLanguage> => ({
  method: "GET",
  endpoint: `/judge0/languages/${id}`,
  operationId: "languageJudgeById"
})

export const postJudge0Compile = (body: {
  chapter_id: string
  chapter_name: string
  lesson_id: string
  language_id: number
  source_code: string
}): QueryAction<JudgeResult> => ({
  method: "POST",
  endpoint: `/judge0/compile`,
  body,
  operationId: "compileCodeJudge0"
})

/**
 * Tariff plan payment
 */
export const postStripeCreateCharge = (body: Stripe): QueryAction<{
  receipt_url: string
}> => ({
  method: "POST",
  endpoint: `/stripe/create-charge`,
  body,
  operationId: "paymentStripe"
})
