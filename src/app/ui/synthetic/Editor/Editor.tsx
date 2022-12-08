import "./Editor.scss"

import MonacoEditor, { EditorProps as MonacoEditorProps } from "@monaco-editor/react"

import LoaderCover from "../Loader/LoaderCover"
import { EditorLanguage, EditorTheme, EdtitorSnippet } from "./Editor.types"

export const EDITOR_DEFAULT_VALUE = "def solution(arg1, arg2):\n\t# Write your code here\n\tpass"
export const EDITOR_DEFAULT_LANGUAGE = EditorLanguage.Python
export const EDITOR_DEFAULT_THEME = EditorTheme.Light
export const EDITOR_DEFAULT_OPTIONS: MonacoEditorProps["options"] = {
  fontFamily: "JetBrains Mono, Roboto Mono, Source Code Pro, Fira Code Retina, Fira Code",
  fontSize: 13,
  fontLigatures: true,

  tabSize: 2,
  wordWrap: "bounded"
}

export interface EditorProps extends MonacoEditorProps {
  snippets?: EdtitorSnippet[]
}

function Editor(props: EditorProps) {
  // const monaco = useMonaco()
  // useEffect(() => {
  //   if (monaco == null) return
  //   if (props.snippets == null) return

  //   const snippets = props.snippets
  //   const languages = monaco.languages

  //   languages.registerCompletionItemProvider("typescript", {
  //     provideCompletionItems(model, position) {
  //       const word = model.getWordUntilPosition(position)
  //       const range = {
  //         startLineNumber: position.lineNumber,
  //         endLineNumber: position.lineNumber,
  //         startColumn: word.startColumn,
  //         endColumn: word.endColumn
  //       }

  //       function mapSnippet(snippet: EdtitorSnippet): languages.CompletionItem {
  //         return {
  //           kind: languages.CompletionItemKind.Snippet,
  //           range,
  //           label: snippet,
  //           insertText: snippet.insertText
  //         }
  //       }

  //       return { suggestions: snippets.map(mapSnippet) }
  //     },
  //   })
  // }, [monaco])

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
