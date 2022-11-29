import Table from "./Table"

type TableKey = string | number

interface TableAutoProps {
  titles: TableKey[]
  data: {
    title: TableKey
    content: TableKey
  }[]
}

function TableAuto(props: TableAutoProps) {
  const contents = props.data.map(chunk => chunk.content)

  return (
    <Table>
      <thead>
        <tr>
          {props.titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
        </tr>
      </thead>
      <tbody>

      </tbody>
    </Table>
  )
}

export default TableAuto
