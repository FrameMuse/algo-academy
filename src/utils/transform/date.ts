export function humanizeDate(lang: string, date: Date) {
  return date.toLocaleString(lang)
}
