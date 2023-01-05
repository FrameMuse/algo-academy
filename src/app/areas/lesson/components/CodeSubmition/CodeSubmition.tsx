import "./CodeSubmition.scss"

import Buttons from "app/layouts/Buttons/Buttons"
import Headings from "app/layouts/Headings/Headings"
import PopupLayout from "app/layouts/PopupLayout/PopupLayout"
import Button from "app/ui/kit/Button/Button"
import List from "app/ui/kit/List/List"
import ListItem from "app/ui/kit/List/ListItem"
import Selector from "app/ui/kit/Selector/Selector"
import { optionsFromEnum } from "app/ui/kit/Selector/Selector.helpers"
import ErrorCover from "app/ui/synthetic/ErrorCover/ErrorCover"
import Expander from "app/ui/synthetic/Expander/Expander"
import useTheme from "app/ui/synthetic/Theme/useTheme"
import { Dispatch, useState } from "react"
import { Modal } from "react-modal-global"
import { WorkspaceEditorLanguage } from "store/reducers/workspace/types"
import { classWithModifiers, toggleState } from "utils/common"
import Progress, { ProgressEntry } from "utils/transform/progress"

import { ICodeSubmitionResult } from "../../../workspace/types"


interface CodeSubmitionProps {
  defaultLanguage?: WorkspaceEditorLanguage
  onLanguageChange?: Dispatch<WorkspaceEditorLanguage>

  runDisabled?: boolean
  onRun?(): Promise<ICodeSubmitionResult | undefined>
}

function CodeSubmition(props: CodeSubmitionProps) {
  const theme = useTheme()

  const [result, setResult] = useState<ICodeSubmitionResult>()
  const [expanded, setExpanded] = useState(false)

  async function onRun() {
    setExpanded(false)

    const result = await props.onRun?.()
    if (result == null) return

    setResult(result)
    setExpanded(true)

    if (result.tests.length === 0) return
    if (result.tests.every(test => test.passed)) {
      Modal.open(GreatJob)
    }
  }

  return (
    <div className={classWithModifiers("code-execution", theme)}>
      <div className="code-execution__tools">
        <Buttons>
          <Button size="small" await onClick={onRun}>Run Code</Button>
          {result && (
            <Button size="small" color="gray" onClick={toggleState(setExpanded)}>{expanded ? "Hide" : "Show"} results</Button>
          )}
        </Buttons>
        <Selector size="big" upwards defaultValue={props.defaultLanguage ?? WorkspaceEditorLanguage.Python} onChange={props.onLanguageChange}>
          {optionsFromEnum(WorkspaceEditorLanguage, false)}
        </Selector>
      </div>
      <Expander className="code-submition__result" expanded={expanded}>
        {result && (
          <CodeSubmitionResult result={result} />
        )}
      </Expander>
    </div >
  )
}

interface CodeSubmitionResultProps {
  result: ICodeSubmitionResult
}

function CodeSubmitionResult(props: CodeSubmitionResultProps) {
  if (props.result.status.id !== 3) {
    return (
      <div className="code-execution-result">
        <ErrorCover>
          <Headings>
            <h6>Test Results - Error</h6>
            <p>{props.result.status.description}</p>
          </Headings>
        </ErrorCover>
      </div>
    )
  }

  const progress: ProgressEntry = {
    completed: props.result.tests.filter(result => result.passed).length,
    total: props.result.tests.length
  }
  const isProgressMax = Progress.isMax(progress)

  return (
    <>
      <Headings>
        <h6>Test Results</h6>
        {!isProgressMax && (
          <p>You accomplished {progress && Progress.humanize(progress)}</p>
        )}
        {isProgressMax && (
          <p>You accomplished THEM ALL!</p>
        )}
      </Headings>
      <List>
        {props.result.tests.map((test, index) => (
          <ListItem icon={test.passed ? "check" : "cross"} key={index}>
            {test.passed && (
              <>
                <strong>{test.description}</strong> - Passed.
              </>
            )}
            {!test.passed && (
              <>
                <strong>{test.description}</strong> - Got {JSON.stringify(test.userAnswer)} instead of {JSON.stringify(test.expected)}.
              </>
            )}
          </ListItem>
        ))}
      </List>
    </>
  )
}

export default CodeSubmition

function GreatJob() {
  return (
    <PopupLayout width="25em">
      <Headings>
        <h4>Great job!</h4>
        <p>Your submission passed all of our test cases!</p>
        <p>Now the lesson will be marked as Completed.</p>
      </Headings>
    </PopupLayout>
  )
}
