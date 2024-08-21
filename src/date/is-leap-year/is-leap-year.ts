/**
 * Checks if a given year is a leap year.
 * @param year - The year to check.
 * @returns `true` if the year is a leap year, `false` otherwise.
 * @throws If the year is less than 1582, as the Gregorian calendar was not introduced until 1582.
 */
export default function isLeapYear(year: number): boolean {
  if (year < 1582) throw new Error("The Gregorian calendar was not introduced until 1582.")
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
}
