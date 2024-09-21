import isDate from "@/core/is-date/is-date"

// 24 * 60 * 60 * 1000
const MILLISECONDS_IN_A_DAY = 86400000

/**
 * A utility function that performs date calculations.
 * @param d The input date.
 * @returns An object with methods to add or subtract days, months, and years from the input date.
 * @throws An error if the input is not a valid date.
 */
export default function dateCalculator(d: Date) {
  let date = new Date(d)
  if (!isDate(d)) throw new Error("Invalid date provided.")

  return {
    /**
     * Adds the specified number of days to the current date.
     * @param days - The number of days to add.
     * @returns The new date after adding the specified number of days.
     */
    addDay: (days: number) => {
      date = new Date(date.getTime() + days * MILLISECONDS_IN_A_DAY)
      return date
    },

    /**
     * Subtracts the specified number of days from the current date.
     * @param days - The number of days to subtract.
     * @returns The new date after subtracting the specified number of days.
     */
    subtractDay: (days: number) => {
      date = new Date(date.getTime() - days * MILLISECONDS_IN_A_DAY)
      return date
    },

    /**
     * Adds the specified number of months to the current date.
     * @param months - The number of months to add.
     * @returns The new date after adding the specified number of months.
     */
    addMonth: (months: number) => {
      date = new Date(date.setMonth(date.getMonth() + months))
      return date
    },

    /**
     * Subtracts the specified number of months from the current date.
     * @param months - The number of months to subtract.
     * @returns The new date after subtracting the specified number of months.
     */
    subtractMonth: (months: number) => {
      date = new Date(date.setMonth(date.getMonth() - months))
      return date
    },

    /**
     * Adds the specified number of years to the current date.
     * @param years - The number of years to add.
     * @returns The new date after adding the specified number of years.
     */
    addYear: (years: number) => {
      date = new Date(date.setFullYear(date.getFullYear() + years))
      return date
    },

    /**
     * Subtracts the specified number of years from the current date.
     * @param years - The number of years to subtract.
     * @returns The new date after subtracting the specified number of years.
     */
    subtractYear: (years: number) => {
      date = new Date(date.setFullYear(date.getFullYear() - years))
      return date
    },
  }
}
