import "./CodeExecution.scss"

import Buttons from "app/layouts/Buttons/Buttons"
import Button from "app/ui/kit/Button/Button"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEntries } from "app/ui/kit/Selector/Selector.helpers"
import useTheme from "app/ui/synthetic/Theme/useTheme"
import { Dispatch } from "react"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"
import { classWithModifiers, getEnumEntries } from "utils/common"

interface CodeExecutionProps {
  onRun?(): void
  onReset?(): void

  defaultLanguage?: WorkspaceEditorLanguage
  onLanguageChange?: Dispatch<WorkspaceEditorLanguage>
}

function CodeExecution(props: CodeExecutionProps) {
  const theme = useTheme()

  return (
    <div className={classWithModifiers("code-execution", theme)}>
      <div className="code-execution__tools">
        <Buttons>
          <Button size="small" onClick={props.onRun}>Run Code</Button>
          <Button size="small" color="gray" onClick={props.onReset}>Reset</Button>
        </Buttons>
        <div className="code-bottom-lang">
          <Selector size="big" upwards defaultValue={props.defaultLanguage ?? WorkspaceEditorLanguage.Python} onChange={props.onLanguageChange}>
            {optionsFromEntries(getEnumEntries(WorkspaceEditorLanguage))}
          </Selector>
        </div>
      </div>
    </div>
  )
}

export default CodeExecution
