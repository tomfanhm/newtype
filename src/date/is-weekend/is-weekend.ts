/**
 * Checks if a given date falls on a weekend.
 *
 * @param date - The date to check in string format.
 * @returns A boolean indicating whether the date falls on a weekend (Saturday or Sunday).
 * @throws If an invalid date string is provided.
 */
export default function isWeekend(date: string): boolean {
  const d = new Date(date)
  if (isNaN(d.getTime())) throw new Error("Invalid date string provided.")
  const dayOfWeek = d.getDay() // Sunday - 0, Monday - 1, ..., Saturday - 6
  return dayOfWeek === 0 || dayOfWeek === 6
}
