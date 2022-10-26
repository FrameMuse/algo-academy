import "./Table.scss"

import { ReactNode } from "react"

interface TableProps {
  children: ReactNode
}

function Table(props: TableProps) {
  return (
    <table className="table">
      {props.children}
    </table>
  )
}

export default Table
