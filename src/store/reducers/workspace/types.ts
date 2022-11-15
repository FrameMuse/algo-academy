import { EditorProps } from "@monaco-editor/react"
import CodeTheme from "app/ui/kit/Code/CodeTheme"
import { EditorTheme } from "app/ui/synthetic/Editor/Editor.types"

export interface WorkspaceInstance {
  editorValue: string
  editorLanguage: WorkspaceEditorLanguage
}

/**
 * User preferences. Only User can update them.
 */
export interface Workspace {
  instances: Record<string | number, Partial<WorkspaceInstance> | undefined>
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

export enum WorkspaceEditorLanguage {
  TypeScript = "typescript",
  JavaScript = "javascript",
  "C++" = "C++",
  Java = "java",
  Python = "python"
}
