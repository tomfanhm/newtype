import { describe, expect, it } from "vitest"
import isLeapYear from "./is-leap-year"

describe("isLeapYear function", () => {
  it("should return true for typical leap years divisible by 4 but not by 100", () => {
    expect(isLeapYear(2024)).toBe(true)
    expect(isLeapYear(2000)).toBe(true)
    expect(isLeapYear(1600)).toBe(true)
  })

  it("should return false for years divisible by 100 but not by 400", () => {
    expect(isLeapYear(1900)).toBe(false)
    expect(isLeapYear(1800)).toBe(false)
  })

  it("should return false for years not divisible by 4", () => {
    expect(isLeapYear(2019)).toBe(false)
    expect(isLeapYear(2018)).toBe(false)
  })

  it("should throw an error for years before 1582", () => {
    expect(() => isLeapYear(1500)).toThrow("The Gregorian calendar was not introduced until 1582.")
    expect(() => isLeapYear(1581)).toThrow("The Gregorian calendar was not introduced until 1582.")
  })

  it("should not throw an error for the year 1582 or later", () => {
    expect(isLeapYear(1582)).toBe(false)
  })

  it("should return false for century years not divisible by 400", () => {
    expect(isLeapYear(1700)).toBe(false)
    expect(isLeapYear(2100)).toBe(false)
  })

  it("should return true for century years divisible by 400", () => {
    expect(isLeapYear(2000)).toBe(true)
    expect(isLeapYear(2400)).toBe(true)
  })

  it("should handle NaN and Infinity", () => {
    expect(() => isLeapYear(NaN)).toThrow("Invalid year provided.")
    expect(() => isLeapYear(Infinity)).toThrow("Invalid year provided.")
  })
})
