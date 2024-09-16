import { describe, expect, it } from "vitest"
import daysBetweenDates from "./days-between-dates"

describe("daysBetweenDates function", () => {
  it("should calculate the number of days between two dates in the same month", () => {
    const date1 = new Date("2024-09-16")
    const date2 = new Date("2024-09-10")
    expect(daysBetweenDates(date1, date2)).toBe(6)
  })

  it("should calculate the number of days between two dates in different months", () => {
    const date1 = new Date("2024-10-05")
    const date2 = new Date("2024-09-16")
    expect(daysBetweenDates(date1, date2)).toBe(19)
  })

  it("should calculate the number of days between two dates in different years", () => {
    const date1 = new Date("2024-01-01")
    const date2 = new Date("2023-01-01")
    expect(daysBetweenDates(date1, date2)).toBe(365)
  })

  it("should account for leap years when calculating days", () => {
    const date1 = new Date("2020-03-01")
    const date2 = new Date("2020-02-28")
    expect(daysBetweenDates(date1, date2)).toBe(2)
  })

  it("should return 0 when the two dates are the same", () => {
    const date1 = new Date("2024-09-16")
    const date2 = new Date("2024-09-16")
    expect(daysBetweenDates(date1, date2)).toBe(0)
  })

  it("should return a negative number if date2 is after date1", () => {
    const date1 = new Date("2024-09-10")
    const date2 = new Date("2024-09-16")
    expect(daysBetweenDates(date1, date2)).toBe(-6)
  })

  it("should correctly calculate days when one date is at the start and the other is at the end of the day", () => {
    const date1 = new Date("2024-09-16T23:59:59")
    const date2 = new Date("2024-09-16T00:00:00")
    expect(daysBetweenDates(date1, date2)).toBe(0)
  })

  it("should calculate the number of days between two dates that are years apart", () => {
    const date1 = new Date("2030-01-01")
    const date2 = new Date("2020-01-01")
    expect(daysBetweenDates(date1, date2)).toBe(3653)
  })
})
