import useAddPlan from "api/hooks/plans/useAddPlan"
import Box from "app/layouts/Box/Box"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Selector from "app/ui/kit/Selector/Selector"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { inputValue, targetValue } from "utils/common"

import { EditableList } from "./__EditableList"

function AdminPlansNewView() {
  const addPlan = useAddPlan()
  const navigate = useNavigate()

  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [cost, setCost] = useState(250)
  const [durationMonths, setDurationMonths] = useState(12)
  const [mostPopular, setMostPopular] = useState(false)
  const [benefits, setBenefits] = useState<string[]>([])

  async function onSubmit() {
    const plan = await addPlan({ title, description, cost, durationMonths, mostPopular, benefits })

    if (plan == null) return
    navigate("../" + plan.id)
  }
  return (
    <Box>
      <Headings>
        <h2>New Plan</h2>
        <p>After creating, you will be navigated to it.</p>
      </Headings>
      <Column>
        <Field placeholder="e.g. DFS" onChange={inputValue(setTitle)} required>Title</Field>
        <Field placeholder="e.g. DFS" onChange={inputValue(setDescription)} required>Description</Field>
        <Field placeholder="e.g. DFS" onChange={inputValue(setCost, Number)} required>Cost</Field>
        <Field placeholder="e.g. DFS" onChange={inputValue(setDurationMonths, Number)} required>Duration in Months</Field>
        <Selector label="Mark as `Most Popular`?" onChange={targetValue(setMostPopular, Boolean)}>
          <option value="true">True</option>
          <option value="false">False</option>
        </Selector>
        <Box>
          <Headings>
            <h4>Benefits</h4>
          </Headings>
          <EditableList defaultValue={["asd"]} onChange={setBenefits} />
        </Box>
        {/* <Field placeholder="e.g. DFS" onChange={inputValue(setLabel)} required>benefits</Field> */}
        <Button color="dark" await onClick={onSubmit}>Create</Button>
      </Column>
    </Box>
  )
}

export default AdminPlansNewView
