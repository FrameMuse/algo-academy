import useDeletePlan from "api/hooks/plans/useDeletePlan"
import usePlans from "api/hooks/plans/usePlans"
import Box from "app/layouts/Box/Box"
import Buttons from "app/layouts/Buttons/Buttons"
import { confirmAction } from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Table from "app/ui/kit/Table/Table"
import Price from "utils/transform/price"

function AdminPlansView() {
  const plans = usePlans()
  const deletePlan = useDeletePlan()

  async function onDelete(id: string) {
    if (!await confirmAction()) return

    deletePlan(id)
  }

  return (
    <Box>
      <h2>Plans</h2>
      <ButtonLink color="gray" to="new">Add new plan</ButtonLink>
      <Table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Description</th>
            <th>Cost</th>
            <th>Duration in Months</th>
            <th>Most Popular?</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {plans.map(plan => (
            <tr key={plan.id}>
              <td>{plan.title}</td>
              <td>{plan.description}</td>
              <td>{Price.format(plan.cost)}</td>
              <td>{plan.durationMonths}</td>
              <td>{plan.mostPopular ? "Yes" : "No"}</td>
              <td>
                <Buttons>
                  <Button color="dark" size="smaller" onClick={() => onDelete(plan.id)}>Delete</Button>
                  <ButtonLink color="blue" size="smaller" to={plan.id}>Edit</ButtonLink>
                </Buttons>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default AdminPlansView
