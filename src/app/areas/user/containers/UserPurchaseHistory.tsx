import useUserPurcaseHistory from "api/hooks/user/useUserPurcaseHistory"
import Box from "app/layouts/Box/Box"
import Table from "app/ui/kit/Table/Table"
import { humanizeDate } from "utils/transform/date"
import Price from "utils/transform/price"

function UserPurchaseHistory() {
  const history = useUserPurcaseHistory()

  return (
    <Box style={{ justifyItems: "stretch" }}>
      <h5>Purchase History</h5>
      <Table>
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Purchase Date</th>
            <th>Plan</th>
            <th>Total Cost</th>
          </tr>
        </thead>
        <tbody>
          {history?.map(chunk => (
            <tr key={chunk.receiptId}>
              <td>#{chunk.receiptId}</td>
              <td>{humanizeDate(chunk.purchaseDate)} | May 21, 2022</td>
              <td>{chunk.name}</td>
              <td>{Price.format(chunk.totalCost)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Box>
  )
}

export default UserPurchaseHistory
