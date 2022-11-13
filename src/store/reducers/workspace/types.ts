import { EditorProps } from "@monaco-editor/react"
import CodeTheme from "app/ui/kit/Code/CodeTheme"
import { EditorTheme } from "app/ui/synthetic/Editor/Editor.types"

interface WorkspaceDraft {
  /**
   * Editor value.
   */
  editorValue: string
}

/**
 * User preferences. Only User can update them.
 */
export interface Workspace {
  drafts: Record<string | number, WorkspaceDraft | undefined>
  settings: WorkspaceSettings
}

export interface WorkspaceSettings {
  editorOptions?: Omit<EditorProps["options"], "theme">
  editorTheme: EditorTheme
  codeTheme: CodeTheme
  /**
   * Whether the dark theme of workspace is enabled.
   */
  darkThemeEnabled: boolean
}

export enum WorkspaceEditorLanguages {
  TypeScript = "typescript",
  JavaScript = "javascript",
  "C++" = "C++",
  Java = "java",
  Python = "python"
}
