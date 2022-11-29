import { EditorLanguage } from "app/ui/synthetic/Editor/Editor.types"

export enum LessonStatus {
  Complete, Incomplete, NeedsReviews
}

export enum LessonType {
  Learning, Practice
}

export interface LessonMultipleContent {
  // statement: string
  // hints: string
  solution: string
  language: EditorLanguage
  notes: string
  tests: string
  defaultCode: string
}
