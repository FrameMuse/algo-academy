/**
 * 
 * This is auto-generated file.
 * All edits will not be preserved for the next generation.
 * 
 * GitHub: https://github.com/FrameMuse/swagger-export-rfl
 * 
*/


export interface CustomAvatar {
  data: any
  contentType: string
}

export interface Notes {
  content: string
}

export interface NotesResponse {
  content: string
  id: string
}

export interface Subscription {
  title: string
  subtitle: string
  cost: number
  period: string
  most_popular: boolean
  descriptions: string[]
}

export interface SubscriptionResponse {
  id: string
  title: string
  subtitle: string
  cost: number
  period: string
  most_popular: boolean
  descriptions: string[]
}

export interface Snippet {
  name: string
  language: number
  code: string
  space_complex: string
  time_complex: string
}

export interface SnippetResponse {
  id: string
  name: string
  language: number
  code: string
  space_complex: string
  time_complex: string
}

export interface Feedback {
  title: string
  content: string
}

export interface Promo {
  name: string
  discount_percent: number
}

export interface PromoResponse {
  id: string
  name: string
  discount_percent: number
}

export interface PromoCheckResponse {
  discount_percent: number
}

export interface Plan {
  receipt_id: string
  purchase_date: string
  plan_name: string
  expiration_date: string
  total_cost: string
}

export interface Stripe {
  subscription_id: string
  promo_name?: string
}

export interface CreateUser {
  first_name: string
  last_name: string
  role: string
  email: string
}

export interface User {
  id: string
  first_name: string
  last_name: string
  display_name?: string | null
  rank: number
  current_plan?: null | Plan
  progress: {
    chapter_id: string
    chapter_name: string
    lessons: {
      id: string
      status: string
    }[]
  }[]
  history: Plan[]
  role: string
  email: string
  providers: Provider[]
  avatar?: CustomAvatar | string
  date_of_creation: string
}

export interface UserResponse {
  id: string
  first_name: string
  last_name: string
  display_name: string | null
  rank: number
  current_plan: null | Plan
  progress: {
    chapter_id: string
    chapter_name: string
    lessons: {
      id: string
      status: string
    }[]
  }[]
  history: Plan[]
  role: string
  email: string
  providers: Provider[]
  avatar: CustomAvatar | string
  date_of_creation: string
}

export interface Lesson {
  name: string
  type: string
  free: boolean
  statement: string | null
  content: string | null
  hints: string | null
  resources: {
    solution: string | null
    language: number
    tests: string
    validation_func: string
    default_code: string
  }[] | null
  used_in: {
    chapter_id: string
    chapter_name: string
  } | null
}

export interface LessonAdminResponse {
  id: string
  name: string
  type: string
  free: boolean
  statement: string | null
  content: string | null
  hints: string | null
  resources: {
    solution: string | null
    language: number
    tests: string
    validation_func: string
    default_code: string
  }[] | null
  used_in: {
    chapter_id: string
    chapter_name: string
  } | null
}

export interface LessonUserResponse {
  id: string
  name: string
  type: string
  free: boolean
  statement: string | null
  content: string | null
  hints: string | null
  resources: {
    solution: string | null
    language: number
    tests: string
    default_code: string
  }[] | null
  used_in: {
    chapter_id: string
    chapter_name: string
  } | null
}

export interface Chapter {
  name: string
  order_number: number
  user_topic: boolean
  list: {
    id: string
    type: string
    name: string
    free?: boolean
  }[]
}

export interface ChapterResponse {
  id: string
  name: string
  order_number: number
  user_topic: boolean
  list: {
    id: string
    type: string
    name: string
    free: boolean
  }[]
}

export interface Provider {
  id: string
  provider: string
}

export interface JudgeConfig {
  maintenance_mode: boolean
  enable_wait_result: boolean
  enable_compiler_options: boolean
  allowed_languages_for_compile_options: unknown[]
  enable_command_line_arguments: boolean
  enable_submission_delete: boolean
  enable_callbacks: boolean
  callbacks_max_tries: number
  callbacks_timeout: number
  enable_additional_files: boolean
  max_queue_size: number
  cpu_time_limit: number
  max_cpu_time_limit: number
  cpu_extra_time: number
  max_cpu_extra_time: number
  wall_time_limit: number
  max_wall_time_limit: number
  memory_limit: number
  max_memory_limit: number
  stack_limit: number
  max_stack_limit: number
  max_processes_and_or_threads: number
  max_max_processes_and_or_threads: number
  enable_per_process_and_thread_time_limit: boolean
  allow_enable_per_process_and_thread_time_limit: boolean
  enable_per_process_and_thread_memory_limit: boolean
  allow_enable_per_process_and_thread_memory_limit: boolean
  max_file_size: number
  max_max_file_size: number
  number_of_runs: number
  max_number_of_runs: number
  redirect_stderr_to_stdout: boolean
  max_extract_size: number
  enable_batched_submissions: boolean
  max_submission_batch_size: number
  submission_cache_duration: number
  use_docs_as_homepage: boolean
  allow_enable_network: boolean
  enable_network: boolean
}

export interface JudgeStatuses {
  id: number
  description: string
}

export interface JudgeLanguages {
  id: number
  name: string
}

export interface JudgeLanguage {
  id: number
  name: string
  is_archived: boolean
  source_file: string
  compile_cmd: string
  run_cmd: string
}

export interface JudgeResult {
  time: string | null
  memory: number | null
  compile_output: {
    passed: boolean
    description: string
    expected: string
    userAnswer: string
  }[] | null
  status: {
    id: number
    description: string
  }
}
