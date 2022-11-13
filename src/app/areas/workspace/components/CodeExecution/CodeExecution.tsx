import "./CodeExecution.scss"

import Buttons from "app/layouts/Buttons/Buttons"
import Button from "app/ui/kit/Button/Button"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEntries } from "app/ui/kit/Selector/Selector.helpers"
import useTheme from "app/ui/synthetic/Theme/useTheme"
import { WorkspaceEditorLanguages } from "store/reducers/workspace/types"
import { classWithModifiers, getEnumEntries } from "utils/common"

interface CodeExecutionProps {
  // onLangChange?: 
}

function CodeExecution(props: CodeExecutionProps) {
  const theme = useTheme()

  return (
    <div className={classWithModifiers("code-execution", theme)}>
      <div className="code-bottom-line">
        <Buttons>
          <Button size="small">Run Code</Button>
          <Button size="small" color="gray">Reset</Button>
        </Buttons>
        <div className="code-bottom-lang">
          <Selector size="big" upwards>
            {optionsFromEntries(getEnumEntries(WorkspaceEditorLanguages))}
          </Selector>
        </div>
      </div>
    </div>
  )
}

export default CodeExecution
