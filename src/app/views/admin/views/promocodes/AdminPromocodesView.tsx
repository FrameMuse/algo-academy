import useDeletePromocode from "api/hooks/promocode/useDeletePromocode"
import usePromocodes from "api/hooks/promocode/usePromocodes"
import Box from "app/layouts/Box/Box"
import Buttons from "app/layouts/Buttons/Buttons"
import { confirmAction } from "app/popups/PopupConfirm/PopupConfirm"
import Button from "app/ui/kit/Button/Button"
import ButtonLink from "app/ui/kit/Button/ButtonLink"
import Table from "app/ui/kit/Table/Table"

function AdminPromocodesView() {
  const promocodes = usePromocodes()
  const deletePromocode = useDeletePromocode()

  async function onDelete(id: string) {
    if (!await confirmAction()) return

    deletePromocode(id)
  }

  return (
    <Box>
      <h2>Promocodes</h2>
      <ButtonLink color="gray" to="new">Add new promocode</ButtonLink>
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Discount in Percents</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {promocodes.map(promocode => (
            <tr key={promocode.id}>
              <td>{promocode.name}</td>
              <td>{promocode.discountPercentage}</td>
              <td>
                <Buttons>
                  <Button color="dark" size="smaller" onClick={() => onDelete(promocode.id)}>Delete</Button>
                  <ButtonLink color="blue" size="smaller" to={promocode.id}>Edit</ButtonLink>
                </Buttons>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default AdminPromocodesView
