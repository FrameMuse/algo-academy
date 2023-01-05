import { EditorProps } from "@monaco-editor/react"
import CodeTheme from "app/ui/kit/Code/CodeTheme"
import { EditorTheme } from "app/ui/synthetic/Editor/Editor.types"

export interface WorkspaceInstance {
  editorValue: string
}

/**
 * User preferences. Only User can update them.
 */
export interface Workspace {
  instances: Record<string | number, Partial<WorkspaceInstance> | undefined>
  editorLanguage: WorkspaceEditorLanguage
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
  /**
   * Usage of workspace instances persistence (code drafts).
   */
  useDrafts: boolean
}

export enum WorkspaceEditorLanguage {
  TypeScript = "typescript",
  JavaScript = "javascript",
  "C++" = "cpp",
  Java = "java",
  Python = "python"
}
