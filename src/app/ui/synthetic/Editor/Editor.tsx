import "./Editor.scss"

import MonacoEditor, { EditorProps } from "@monaco-editor/react"

import LoaderCover from "../Loader/LoaderCover"
import { EditorLanguage, EditorTheme } from "./Editor.types"

export const EDITOR_DEFAULT_VALUE = "def solution(arg1, arg2):\n\t# Write your code here\n\tpass"
export const EDITOR_DEFAULT_LANGUAGE = EditorLanguage.Python
export const EDITOR_DEFAULT_THEME = EditorTheme.Light
export const EDITOR_DEFAULT_OPTIONS: EditorProps["options"] = {
  fontFamily: "JetBrains Mono, Roboto Mono, Source Code Pro, Fira Code Retina, Fira Code",
  fontSize: 13,
  fontLigatures: true,

  tabSize: 2,
  wordWrap: "bounded"
}

function Editor(props: EditorProps) {
  return (
    <MonacoEditor
      className="editor"
      defaultValue={EDITOR_DEFAULT_VALUE}
      defaultLanguage={EDITOR_DEFAULT_LANGUAGE}
      loading={<LoaderCover />}

      {...props}
      options={{
        ...EDITOR_DEFAULT_OPTIONS,
        ...props.options,
      }}
    />
  )
}

export default Editor
