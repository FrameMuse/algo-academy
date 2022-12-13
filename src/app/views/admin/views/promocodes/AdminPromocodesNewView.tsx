import useAddPromocode from "api/hooks/promocode/useAddPromocode"
import Box from "app/layouts/Box/Box"
import Column from "app/layouts/Column/Column"
import Headings from "app/layouts/Headings/Headings"
import Button from "app/ui/kit/Button/Button"
import Field from "app/ui/kit/Field/Field"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { inputValue } from "utils/common"

function AdminPromocodesNewView() {
  const addPromocode = useAddPromocode()
  const navigate = useNavigate()

  const [name, setName] = useState<string>("")
  const [discount, setDiscount] = useState<number>(20)

  async function onSubmit() {
    const promocode = await addPromocode(name, discount)

    if (promocode == null) return
    navigate("../" + promocode.id)
  }
  return (
    <Box>
      <Headings>
        <h2>New Promocode</h2>
        <p>After creating, you will be navigated to it.</p>
      </Headings>
      <Column>
        <Field placeholder="e.g. WINTER20" onChange={inputValue(setName)} required>Name</Field>
        <Field placeholder="e.g. 20" onChange={inputValue(setDiscount, Number)} required>Discount in Percents</Field>
        <Button color="dark" await onClick={onSubmit}>Create</Button>
      </Column>
    </Box>
  )
}

export default AdminPromocodesNewView
