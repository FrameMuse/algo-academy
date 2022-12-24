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
  ChapterResponse,
  CreateUser,
  Feedback,
  JudgeConfig,
  JudgeLanguage,
  JudgeLanguages,
  JudgeResult,
  JudgeStatuses,
  Lesson,
  LessonAdminResponse,
  LessonUserResponse,
  Notes,
  NotesResponse,
  Promo,
  PromoCheckResponse,
  PromoResponse,
  Snippet,
  SnippetResponse,
  Stripe,
  Subscription,
  SubscriptionResponse,
  User,
  UserResponse
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
 * Get information about user.
 */
export const getUsersId = (id: string): QueryAction<UserResponse> => ({
  method: "GET",
  endpoint: `/users/${id}`,
  operationId: "getUserById"
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
export const patchUsersMeAvatar = (body: FormData): QueryAction<{
  avatar: {
    data: string
    contentType: string
  }
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
export const getLessons = (): QueryAction<LessonUserResponse[]> => ({
  method: "GET",
  endpoint: `/lessons`,
  operationId: "allLessons"
})

/**
 * This can only be done by an administrator.
 */
export const postLessons = (body: Partial<Lesson>): QueryAction<LessonAdminResponse> => ({
  method: "POST",
  endpoint: `/lessons`,
  body,
  operationId: "createLesson"
})

/**
 * Learning lessons unused in chapter. This can only be done by an administrator.
 */
export const getLessonsUnused = (): QueryAction<LessonAdminResponse[]> => ({
  method: "GET",
  endpoint: `/lessons/unused`,
  operationId: "ununsedLessons"
})

/**
 * Get information about lesson. Only for authorized users.
 */
export const getLessonsId = (id: string): QueryAction<LessonUserResponse> => ({
  method: "GET",
  endpoint: `/lessons/${id}`,
  operationId: "lessonById"
})

/**
 * Update information about lesson. This can only be done by an administrator.
 */
export const patchLessonsId = (id: string, body: Partial<Lesson>): QueryAction => ({
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
 * Get information about lesson.
 */
export const getLessonsAdminId = (id: string): QueryAction<LessonAdminResponse> => ({
  method: "GET",
  endpoint: `/lessons/admin/${id}`,
  operationId: "lessonByIdForAdmin"
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
export const getChapters = (): QueryAction<ChapterResponse[]> => ({
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
  list?: string[]
}): QueryAction<ChapterResponse> => ({
  method: "POST",
  endpoint: `/chapters`,
  body,
  operationId: "createChapter"
})

/**
 * Get information about chapter. Only for authorized users.
 */
export const getChaptersId = (id: string): QueryAction<ChapterResponse> => ({
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
  list: string[]
}>): QueryAction => ({
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
export const getPromo = (): QueryAction<PromoResponse[]> => ({
  method: "GET",
  endpoint: `/promo`,
  operationId: "allPromo"
})

/**
 * This can only be done by an administrator.
 */
export const postPromo = (body: Promo): QueryAction<PromoResponse> => ({
  method: "POST",
  endpoint: `/promo`,
  body,
  operationId: "createPromo"
})

/**
 * promo success
 */
export const postPromoCheck = (body: {
  name: string
}): QueryAction<PromoCheckResponse> => ({
  method: "POST",
  endpoint: `/promo/check`,
  body,
  operationId: "checkPromo"
})

/**
 * Only for authorized users.
 */
export const getPromoId = (id: string): QueryAction<PromoResponse> => ({
  method: "GET",
  endpoint: `/promo/${id}`,
  operationId: "promoById"
})

/**
 * This can only be done by an administrator.
 */
export const patchPromoId = (id: string, body: Partial<PromoResponse>): QueryAction<Promo> => ({
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
export const getSubscriptions = (): QueryAction<SubscriptionResponse[]> => ({
  method: "GET",
  endpoint: `/subscriptions`,
  operationId: "allSubscriptions"
})

/**
 * This can only be done by an administrator.
 * The subscription validity period can be specified in the formats ('1y-2m-14d', '1y-2m', '1y-14d', '1y', '2m-14d', '2m', '14d'). y - amount of years, m - amount of months, d - amount of days
 */
export const postSubscriptions = (body: Subscription): QueryAction<SubscriptionResponse> => ({
  method: "POST",
  endpoint: `/subscriptions`,
  body,
  operationId: "createSubscription"
})

/**
 * Only for authorized users.
 */
export const getSubscriptionsId = (id: string): QueryAction<SubscriptionResponse> => ({
  method: "GET",
  endpoint: `/subscriptions/${id}`,
  operationId: "subscriptionById"
})

/**
 * This can only be done by an administrator.
 */
export const patchSubscriptionsId = (id: string, body: Partial<Subscription>): QueryAction => ({
  method: "PATCH",
  endpoint: `/subscriptions/${id}`,
  body,
  operationId: "updateSubscription"
})

/**
 * This can only be done by an administrator.
 */
export const deleteSubscriptionsId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/subscriptions/${id}`,
  operationId: "deleteSubscription"
})

/**
 * This can only be done by an administrator.
 */
export const postSnippets = (body: Snippet): QueryAction<SnippetResponse> => ({
  method: "POST",
  endpoint: `/snippets`,
  body,
  operationId: "createSnippet"
})

/**
 * Only for authorized users.
 */
export const getSnippetsLanguageLanguage = (language: number): QueryAction<SnippetResponse[]> => ({
  method: "GET",
  endpoint: `/snippets/language/${language}`,
  operationId: "snippetsByLanguageId"
})

/**
 * This can only be done by an administrator.
 */
export const getSnippetsId = (id: string): QueryAction<SnippetResponse> => ({
  method: "GET",
  endpoint: `/snippets/${id}`,
  operationId: "snippetById"
})

/**
 * This can only be done by an administrator.
 */
export const patchSnippetsId = (id: string, body: Partial<{
  name: string
  language: number
  code: string
  space_complex: string
  time_complex: string
}>): QueryAction => ({
  method: "PATCH",
  endpoint: `/snippets/${id}`,
  body,
  operationId: "updateSnippet"
})

/**
 * This can only be done by an administrator.
 */
export const deleteSnippetsId = (id: string): QueryAction => ({
  method: "DELETE",
  endpoint: `/snippets/${id}`,
  operationId: "deleteSnippet"
})

/**
 * This can only be done by an administrator.
 */
export const getFeedbacks = (): QueryAction<{
  title: string
  content: string
  user_id: string
}[]> => ({
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

export const getNotesLessonId = (lesson_id: string): QueryAction<NotesResponse> => ({
  method: "GET",
  endpoint: `/notes/${lesson_id}`,
  operationId: "notesByLessonId"
})

export const patchNotesLessonId = (lesson_id: string, body: Partial<Notes>): QueryAction => ({
  method: "PATCH",
  endpoint: `/notes/${lesson_id}`,
  body,
  operationId: "updateNotesByLessonId"
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
 * Tariff plan payment. Only for authorized users.
 */
export const postStripeCreateCharge = (body: Stripe): QueryAction<{ url: string }> => ({
  method: "POST",
  endpoint: `/stripe/create-charge`,
  body,
  operationId: "paymentStripe"
})
