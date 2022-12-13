import usePromocode from "api/hooks/promocode/usePromocode"
import useUpdatePromocode from "api/hooks/promocode/useUpdatePromocode"
import Box from "app/layouts/Box/Box"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import { useState } from "react"
import { inputValue } from "utils/common"
import useParam from "utils/hooks/useParam"

export function AdminPromocodesEditView() {
  const promocodeId = useParam("promocodeId")
  const promocode = usePromocode(promocodeId)
  const updatePromocode = useUpdatePromocode()

  const [name, setName] = useState<string>()
  const [discount, setDiscount] = useState<number>()

  async function onSubmit() {
    await updatePromocode(promocodeId, { name, discountPercentage: discount })
  }
  return (
    <Box>
      <Headings>
        <h2>Edit Promocode</h2>
      </Headings>
      <Column>
        <Field defaultValue={promocode.name} onChange={inputValue(setName)} required>Name</Field>
        <Field defaultValue={promocode.discountPercentage} onChange={inputValue(setDiscount, Number)} required>Discount in Percents</Field>
        <Button color="dark" await onClick={onSubmit}>Save</Button>
      </Column>
    </Box>
  )
}

export default AdminPromocodesEditView
