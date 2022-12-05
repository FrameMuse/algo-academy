import "./CodeExecution.scss"

import Buttons from "app/layouts/Buttons/Buttons"
import Button from "app/ui/kit/Button/Button"
import Icon from "app/ui/kit/Icon/Icon"
import List from "app/ui/kit/List/List"
import ListItem from "app/ui/kit/List/ListItem"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import useTheme from "app/ui/synthetic/Theme/useTheme"
import { Dispatch, useEffect, useLayoutEffect, useRef, useState } from "react"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"
import { classWithModifiers, toggleState } from "utils/common"
import Progress, { ProgressEntry } from "utils/transform/progress"

import { WorkspaceCode } from "../.."

interface CodeExecutionProps {
  onRun?(): void | Promise<void>
  onReset?(): void

  defaultLanguage?: WorkspaceEditorLanguage
  onLanguageChange?: Dispatch<WorkspaceEditorLanguage>

  result?: {
    compile_output: string | null
  }
}

function CodeExecution(props: CodeExecutionProps) {
  const theme = useTheme()
  const [expanded, setExpanded] = useState(false)

  useEffect(() => setExpanded(!!props.result), [props.result])

  return (
    <div className={classWithModifiers("code-execution", theme)}>
      <div className="code-execution__tools">
        <Buttons>
          <Button size="small" await onClick={props.onRun}>Run Code</Button>
          {props.result && (
            <Button size="small" color="gray" onClick={toggleState(setExpanded)}>{expanded ? "Hide" : "Show"} results</Button>
          )}
        </Buttons>
        <div className="code-bottom-lang">
          <Selector size="big" upwards defaultValue={props.defaultLanguage ?? WorkspaceEditorLanguage.Python} onChange={props.onLanguageChange}>
            {optionsFromEnum(WorkspaceEditorLanguage, false)}
          </Selector>
        </div>
      </div>
      {props.result && (
        <CodeExecutionResult result={props.result} expanded={expanded} />
      )}
    </div>
  )
}

const testResult = {
  "time": "0.033",
  "memory": 7432,
  "compile_output": "<---+++ CODE RESULT +++--->\n{\"results\":[{\"passed\":false,\"description\":\"palindrome string\",\"expected\":true,\"userAnswer\":false},{\"passed\":false,\"description\":\"single character string\",\"expected\":true,\"userAnswer\":false},{\"passed\":false,\"description\":\"n duplicates of single character\",\"expected\":true,\"userAnswer\":false},{\"passed\":true,\"description\":\"non palindrome string\",\"expected\":false,\"userAnswer\":false},{\"passed\":false,\"description\":\"double center palindrome string\",\"expected\":true,\"userAnswer\":false},{\"passed\":false,\"description\":\"single center palindrome string\",\"expected\":true,\"userAnswer\":false},{\"passed\":false,\"description\":\"large palindrome string\",\"expected\":true,\"userAnswer\":false}]}\n",
  "status": {
    "id": 3,
    "description": "Accepted"
  }
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
      <div className="text-case-top" onClick={toggleState(setExpanded)}>
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




interface Output {
  results: {
    passed: boolean
    description: string
    expected: boolean
    userAnswer: boolean
  }[]
}


interface CodeExecutionResultProps {
  result: {
    compile_output: string | null
  }

  expanded?: boolean
}

function CodeExecutionResult(props: CodeExecutionResultProps) {
  const [output, setOutput] = useState<Output>()

  const innerRef = useRef<HTMLDivElement>(null)
  const [height, setHeight] = useState<number | undefined>()

  useLayoutEffect(() => {
    if (!innerRef.current) return

    setHeight(innerRef.current.scrollHeight)
  }, [props.expanded])

  useEffect(() => {
    if (props.result.compile_output == null) return

    try {
      const output = JSON.parse(props.result.compile_output.replace("<---+++ CODE RESULT +++--->", ""))

      setOutput(output)
    } catch (error) {
      console.error(error)
    }
  }, [props.result])

  if (props.result.compile_output == null && output == null) {
    return (
      <div className="code-execution-result">
        <h6>Test Results - Error</h6>
        <ErrorCover>Something went wrong.</ErrorCover>
      </div>
    )
  }

  const progress: ProgressEntry | undefined = output && {
    completed: output.results.filter(result => result.passed).length,
    total: output.results.length
  }

  return (
    <div className="code-execution-result">
      <div className={classWithModifiers("code-execution-result__container", props.expanded && "expanded")} aria-hidden={!props.expanded} style={{ "--height": height }}>
        <div className="code-execution-result__inner" ref={innerRef}>
          <h6>Test Results - ({progress && Progress.humanize(progress)})</h6>
          {output && (
            <List>
              {output.results.map((result, index) => (
                <ListItem icon={result.passed ? "check" : "cross"} key={index}>
                  {result.description} --- {result.passed ? "Passed" : "Failed"}
                </ListItem>
              ))}
            </List>
          )}
        </div>
      </div>
    </div>
  )
}

export default CodeExecution
