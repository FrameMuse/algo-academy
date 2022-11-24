export function humanizeDate(date: Date, lang = "en") {
  return date.toLocaleString(lang)
}
