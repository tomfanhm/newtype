import isDate from "@/core/is-date/is-date"

/**
 * Formats a date string according to the specified format.
 *
 * @param dateStr The date string to format.
 * @param format The format string. Use "YYYY" for the full year, "MM" for the month, and "DD" for the day.
 * @returns The formatted date string.
 * @throws Will throw an error if the provided date string is invalid.
 */
export default function formatDate(dateStr: string, format: string): string {
  const date = new Date(dateStr)
  if (!isDate(date)) {
    throw new Error("Invalid date string.")
  }
  const pad = (num: number) => num.toString().padStart(2, "0")

  return format
    .replace("YYYY", date.getFullYear().toString())
    .replace("MM", pad(date.getMonth() + 1)) // +1 because months are zero-indexed
    .replace("DD", pad(date.getDate()))
}
