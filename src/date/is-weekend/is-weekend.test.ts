import { describe, it, expect } from "vitest"
import isWeekend from "./is-weekend"

describe("isWeekend function", () => {
  it("should return true for a Sunday", () => {
    const date = "2023-08-20" // Sunday
    expect(isWeekend(date)).toBe(true)
  })

  it("should return true for a Saturday", () => {
    const date = "2023-08-19" // Saturday
    expect(isWeekend(date)).toBe(true)
  })

  it("should return false for a Monday", () => {
    const date = "2023-08-21" // Monday
    expect(isWeekend(date)).toBe(false)
  })

  it("should return false for a Tuesday", () => {
    const date = "2023-08-22" // Tuesday
    expect(isWeekend(date)).toBe(false)
  })

  it("should return false for a Wednesday", () => {
    const date = "2023-08-23" // Wednesday
    expect(isWeekend(date)).toBe(false)
  })

  it("should return false for a Thursday", () => {
    const date = "2023-08-24" // Thursday
    expect(isWeekend(date)).toBe(false)
  })

  it("should return false for a Friday", () => {
    const date = "2023-08-25" // Friday
    expect(isWeekend(date)).toBe(false)
  })

  it("should handle a leap day correctly (Thursday)", () => {
    const date = "2024-02-29" // Leap day, which is a Thursday in 2024
    expect(isWeekend(date)).toBe(false)
  })

  it("should handle the transition from one year to the next (Saturday)", () => {
    const date = "2023-12-30" // Saturday
    expect(isWeekend(date)).toBe(true)
  })

  it("should handle dates far in the past (Sunday)", () => {
    const date = "1900-01-07" // Sunday
    expect(isWeekend(date)).toBe(true)
  })

  it("should handle different time zones", () => {
    const localDate = "2023-08-20T00:00:00-05:00" // Still Sunday in Central Time
    expect(isWeekend(localDate)).toBe(true)
  })

  it("should handle invalid dates", () => {
    const date = "invalid"
    expect(() => isWeekend(date)).toThrowError("Invalid date string provided.")
  })
})
