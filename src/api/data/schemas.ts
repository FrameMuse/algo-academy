/**
 * 
 * This is auto-generated file.
 * All edits will not be preserved for the next generation.
 * 
 * GitHub: https://github.com/FrameMuse/swagger-export-rfl
 * 
*/


export interface Feedback {
  title: string
  content: string
}

export interface Promo {
  name: string
}

export interface Plan {
  receipt_id: string
  purchase_date: string
  plan_name: string
  total_cost: string
}

export interface Stripe {
  plan_name: string
  amount: number
  email: string
  card_number: string
  card_exp_month: string
  card_exp_year: string
  card_CVC: string
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
      id: string,
      status: string,
    }[]
  }[]
  history: Plan[]
  role: string
  email: string
  providers: Provider[]
  avatar?: string | null
  date_of_creation: string
}

export interface ResponseLesson {
  id: string
}

export interface Lesson {
  id: string
  name: string
  type: string
  statement: string | null
  content: string | null
  hints: string | null
  status: string
  resources: {
    solution: string | null
    language: number
    notes: string
    tests: string
    default_code: string
  }[] | null
  used_in: {
    chapter_id: string
    chapter_name: string
  } | null
}

export interface Chapter {
  id: string
  name: string
  order_number: number
  user_topic: boolean
  list: {
    id: string
    type: string
    name: string
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
  stdout: string
  time: string
  memory: number
  stderr: string
  token: string
  compile_output: string
  message: string
  status: {
    id: number
    description: string
  }
}
