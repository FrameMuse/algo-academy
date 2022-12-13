import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"

export enum LessonStatus {
  Incomplete, NeedsReviews, Complete
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
  tests: string
  testsValidation: string
  startingCode: string
}
