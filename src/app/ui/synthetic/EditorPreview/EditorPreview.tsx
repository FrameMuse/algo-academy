import "./EditorPreview.scss"

import { DiffEditor } from "@monaco-editor/react"
import ButtonGroup from "app/layouts/ButtonGroup/ButtonGroup"
import Headings from "app/layouts/Headings/Headings"
import Row from "app/layouts/Row/Row"
import { confirmAction } from "app/popups/PopupConfirm/PopupConfirm"
import ArticleMarkdown from "app/ui/kit/Article/ArticleMarkdown"
import Button from "app/ui/kit/Button/Button"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import { useEffect, useState } from "react"
import { classWithModifiers, toggleState } from "utils/common"

import Editor from "../Editor/Editor"
import { EditorLanguage, EditorTheme } from "../Editor/Editor.types"
import Theme from "../Theme/Theme"
import { AppTheme } from "../Theme/themeContext"


interface EditorPreviewProps {
  disablePreview?: boolean
  language?: EditorLanguage
  defaultValue?: string
  onSave?(value: string): void | Promise<void>
  onDirtyChange?(dirty: boolean): void
}


/**
 * TODO: Currently uses outside class names and styles of `problem-layout`, but should be reworked to have its own.
 */
function EditorPreview(props: EditorPreviewProps) {
  const [value, setValue] = useState<string>(props.defaultValue ?? "")
  const [dirty, setDirty] = useState<boolean>(false)

  const [articleTheme, setArticleTheme] = useState<AppTheme>("light")
  const [editorTheme, setEditorTheme] = useState<EditorTheme>(EditorTheme.Light)

  const [diffMode, setDiffMode] = useState(false)

  function updateValue(value: string | undefined) {
    if (value == null) return

    setValue(value)
    setDirty(value !== props.defaultValue)

    props.onDirtyChange?.(value !== props.defaultValue)
  }

  async function onSave() {
    if (!await confirmAction()) return

    await props.onSave?.(value)
    props.onDirtyChange?.(false)
  }
  async function onCancel() {
    if (!await confirmAction()) return

    if (props.defaultValue == null) return
    updateValue(props.defaultValue)
  }

  useEffect(() => {
    if (props.defaultValue == null) return

    const dirty = props.defaultValue !== value
    if (dirty) return

    updateValue(props.defaultValue)
  }, [props.defaultValue])

  const plainEditor = (
    <Editor
      height="100%"
      theme={editorTheme}

      defaultLanguage={props.language}
      language={props.language}

      value={value}
      defaultValue={value}

      onChange={updateValue}
    />
  )

  const diffEditor = (
    <DiffEditor
      height="100%"
      theme={editorTheme}
      options={{ readOnly: true }}

      original={props.defaultValue}
      modified={value}
    />
  )

  return (
    <div className="editor-preview">
      <Headings>
        <h3>Editor Preview</h3>
        <p>{dirty ? "Content has been changed." : "Content hasn't been changed yet."}</p>
      </Headings>
      <div className="editor-preview__tools">
        <ButtonGroup color={dirty ? "white" : "gray"} size="small" squared>
          <Button await onClick={onSave}>Save</Button>
          <Button onClick={onCancel}>Cancel</Button>
          <Button color={diffMode ? "blue" : "gray"} onClick={toggleState(setDiffMode)}>Diff</Button>
        </ButtonGroup>
        <Row>
          <Selector label="Article Theme" defaultValue={articleTheme} onChange={setArticleTheme}>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </Selector>
          <Selector label="Editor Theme" defaultValue={editorTheme} onChange={setEditorTheme}>{optionsFromEnum(EditorTheme)}</Selector>
        </Row>
      </div>
      <div className="editor-preview__layout">
        {!props.disablePreview && (
          <div className={classWithModifiers("editor-preview__preview", articleTheme === "dark" && "dark")}>
            <Theme theme={articleTheme}>
              <ArticleMarkdown content={value} fontSize="small" />
            </Theme>
          </div>
        )}
        <div className="editor-preview__editor">
          {diffMode && diffEditor}
          {!diffMode && plainEditor}
        </div>
      </div>
    </div>
  )
}

export default EditorPreview
