/**
 * Calculates the number of days between two dates.
 *
 * @param date1 - The first date.
 * @param date2 - The second date.
 * @returns The number of days between the two dates.
 */
export default function daysBetweenDates(date1: Date, date2: Date): number {
  return Math.floor((date1.getTime() - date2.getTime()) / 86400000) // 24 * 60 * 60 * 1000 = 86400000
}
