import { pluralize } from "utils/common"

export function formatDuration(months: number): string {
  const years = Math.floor(months / 12)
  const monthsRemainder = (months % 12)

  const monthsString = monthsRemainder >= 1 ? (" " + pluralize(monthsRemainder, "Month")) : ""
  const yearsString = years >= 1 ? pluralize(years, "Year") : ""

  return (yearsString + monthsString).trim()
}
