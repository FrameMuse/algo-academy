import "./Editor.scss"

import { DiffEditor as MonacoDiffEditor, DiffEditorProps } from "@monaco-editor/react"

import LoaderCover from "../Loader/LoaderCover"
import { EditorLanguage, EditorTheme } from "./Editor.types"

export const EDITOR_DEFAULT_VALUE = "def solution(arg1, arg2):\n\t# Write your code here\n\tpass"
export const EDITOR_DEFAULT_LANGUAGE = EditorLanguage.Python
export const EDITOR_DEFAULT_THEME = EditorTheme.Light
export const EDITOR_DEFAULT_OPTIONS: DiffEditorProps["options"] = {
  fontFamily: "JetBrains Mono, Roboto Mono, Source Code Pro, Fira Code Retina, Fira Code",
  fontSize: 13,
  fontLigatures: true
}

function DiffEditor(props: DiffEditorProps) {
  return (
    <MonacoDiffEditor
      className="editor"
      loading={<LoaderCover />}

      {...props}
      options={{
        ...EDITOR_DEFAULT_OPTIONS,
        ...props.options,
      }}
    />
  )
}

export default DiffEditor
