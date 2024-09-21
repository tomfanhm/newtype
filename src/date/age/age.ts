import isDate from "@/core/is-date/is-date"

/**
 * Calculates the age based on the provided birth date.
 * @param birthDate The birth date in string format (e.g. "YYYY-MM-DD").
 * @returns The calculated age as a number.
 * @throws If an invalid birth date string is provided.
 */
export default function age(birthDate: string): number {
  const d = new Date(birthDate)
  if (!isDate(d)) throw new Error("Invalid birth date string provided.")

  const today = new Date()
  let age = today.getFullYear() - d.getFullYear()
  const monthDifference = today.getMonth() - d.getMonth()
  const dayDifference = today.getDate() - d.getDate()

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) age--
  return age
}
