import "./CodeExecution.scss"

import Buttons from "app/layouts/Buttons/Buttons"
import Button from "app/ui/kit/Button/Button"
import Icon from "app/ui/kit/Icon/Icon"
import List from "app/ui/kit/List/List"
import ListItem from "app/ui/kit/List/ListItem"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import useTheme from "app/ui/synthetic/Theme/useTheme"
import { Dispatch, useState } from "react"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"
import { classWithModifiers } from "utils/common"

import { WorkspaceCode } from "../.."

interface CodeExecutionProps {
  onRun?(): void
  onReset?(): void

  defaultLanguage?: WorkspaceEditorLanguage
  onLanguageChange?: Dispatch<WorkspaceEditorLanguage>

  result: any
}

function CodeExecution(props: CodeExecutionProps) {
  const theme = useTheme()
  const [expanded, setExpanded] = useState(false)
  // console.log(props.result)
  return (
    <div className={classWithModifiers("code-execution", theme)}>
      <div className="code-execution__tools">
        <Buttons>
          <Button size="small" onClick={props.onRun}>Run Code</Button>
          <Button size="small" color="gray" onClick={props.onReset}>Reset</Button>
        </Buttons>
        <div className="code-bottom-lang">
          <Selector size="big" upwards defaultValue={props.defaultLanguage ?? WorkspaceEditorLanguage.Python} onChange={props.onLanguageChange}>
            {optionsFromEnum(WorkspaceEditorLanguage, false)}
          </Selector>
        </div>
      </div>
      <div className="code-execution-result">
        <div className="code-execution-result__title">Test Results</div>
        {props.result && (
          <List>
            {JSON.parse(props.result.compile_output.replace("<---+++ CODE RESULT +++--->", "")).results.map((result: any, index: any) => (
              <ListItem key={index}>{result.description} --- {result.passed ? "Passed" : "Failed"}</ListItem>
            ))}
          </List>
        )}
      </div>
      {expanded && (
        <div className="code-execution__tests">
          <TestCase title="" />
        </div>
      )}
    </div>
  )
}


interface TestCaseProps {
  title: string
}

// function TestCase(props: TestCaseProps) {
//   return (
//     <div className="test-case">
//       <div className="test-case__title">{props.title}</div>
//       <div className="test-case__container">
//         <div className="test-case-group">
//           <div className="test-case-group__title">Inputs</div>
//           <div className="test-case-group__container">
//             <WorkspaceCode></WorkspaceCode>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

function TestCase(props: TestCaseProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div className="text-case">
      <div className="text-case-top" onClick={() => setExpanded(!expanded)}>
        <div className="text-case-name">Test Case #1</div>
        <div className="text-case-arrow">
          <Icon name="chevron-down" />
        </div>
      </div>
      {expanded && (
        <div className="text-case-bottom">
          <div className="text-case-item">
            <div className="text-case-item-title">Inputs</div>
            <div className="text-case-item-code">
              <WorkspaceCode>{"{\n\tX = 1\n}"}</WorkspaceCode>
            </div>
          </div>
          <div className="text-case-item">
            <div className="text-case-item-title">Expected Output</div>
            <div className="text-case-item-code">
              <WorkspaceCode>false</WorkspaceCode>
            </div>
          </div>
          <div className="text-case-item">
            <div className="text-case-item-title">Your Code’s Output</div>
            <div className="text-case-item-code">
              <WorkspaceCode>true</WorkspaceCode>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default CodeExecution
