import "./Table.scss"

import { HTMLAttributes, ReactNode } from "react"

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode
}

function Table(props: TableProps) {
  return (
    <div className="table-wrapper">
      <table {...props} className="table" />
    </div>
  )
}

export default Table
