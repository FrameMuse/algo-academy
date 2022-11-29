import "./Table.scss"

import { HTMLAttributes, ReactNode } from "react"

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode
}

function Table(props: TableProps) {
  return (
    <table {...props} className="table" />
  )
}

export default Table
