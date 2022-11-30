import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"

export enum LessonStatus {
  Complete, Incomplete, NeedsReviews
}

export enum LessonType {
  Learning, Practice
}


/**
 * This is related to language specific content. 
 */
export interface LessonMultipleContent {
  solution: string
  language: EditorLanguage
  notes: string
  tests: string
  defaultCode: string
}
