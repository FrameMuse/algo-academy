import usePlan from "api/hooks/plans/usePlan"
import useUpdatePlan from "api/hooks/plans/useUpdatePlan"
import Box from "app/layouts/Box/Box"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import Selector from "app/ui/kit/Selector/Selector"
import { TrueFalseOptions } from "app/ui/kit/Selector/Selector.helpers"
import { useState } from "react"
import { inputValue, targetValue } from "utils/common"
import useParam from "utils/hooks/useParam"

import { EditableList } from "./__EditableList"
export function AdminPlansEditView() {
  const planId = useParam("planId")

  const plan = usePlan(planId)
  const editPlan = useUpdatePlan()

  const [title, setTitle] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [cost, setCost] = useState<number>()
  const [durationMonths, setDurationMonths] = useState<number>()
  const [mostPopular, setMostPopular] = useState<boolean>()
  const [benefits, setBenefits] = useState<string[]>()

  async function onSubmit() {
    await editPlan(planId, { title, description, cost, durationMonths, mostPopular, benefits })
  }
  return (
    <Box>
      <Headings>
        <h2>Edit Plan</h2>
      </Headings>
      <Column>
        <Field defaultValue={plan.title} onChange={inputValue(setTitle)} required>Title</Field>
        <Field defaultValue={plan.description} onChange={inputValue(setDescription)} required>Description</Field>
        <Field defaultValue={plan.cost} onChange={inputValue(setCost, Number)} required>Cost</Field>
        <Field defaultValue={plan.durationMonths} onChange={inputValue(setDurationMonths, Number)} required>Duration in Months</Field>
        <Selector label="Mark as `Most Popular`?" defaultValue={Number(plan.mostPopular)} onChange={targetValue(setMostPopular, Boolean)}>
          {TrueFalseOptions}
        </Selector>
        <Box>
          <Headings>
            <h4>Benefits</h4>
          </Headings>
          <EditableList defaultValue={plan.benefits} onChange={setBenefits} />
        </Box>
        <Button color="dark" await onClick={onSubmit}>Save</Button>
      </Column>
    </Box>
  )
}

export default AdminPlansEditView
