import { describe, it, expect, afterEach, beforeEach, vi } from "vitest"
import age from "./age"

const MOCK_DATE = "2024-08-23"

describe("age function", () => {
  beforeEach(() => {
    // tell vitest we use mocked time
    vi.useFakeTimers()
    vi.setSystemTime(new Date(MOCK_DATE))
  })

  afterEach(() => {
    // restoring date after each test run
    vi.useRealTimers()
  })

  it("should throw an error for an invalid birth date string", () => {
    const birthDate = "invalid"
    expect(() => age(birthDate)).toThrowError("Invalid birth date string provided.")
  })

  it("should correctly calculate age when the birthday has already occurred this year", () => {
    const birthDate = "2000-01-15"
    expect(age(birthDate)).toBe(24)
  })

  it("should correctly calculate age when the birthday is later this year", () => {
    const birthDate = "2000-12-15"
    expect(age(birthDate)).toBe(23)
  })

  it("should correctly calculate age for a leap year birthday (Feb 29) on a non-leap year", () => {
    const birthDate = "2000-02-29"
    expect(age(birthDate)).toBe(24)
  })

  it("should correctly calculate age for a leap year birthday (Feb 29) on a leap year", () => {
    const birthDate = "2016-02-29"
    expect(age(birthDate)).toBe(8)
  })

  it("should correctly calculate age for dates far in the past", () => {
    const birthDate = "1900-08-20"
    expect(age(birthDate)).toBe(124)
  })

  it("should correctly calculate age if today is the day before the birthday", () => {
    const birthDate = "2004-08-24"
    expect(age(birthDate)).toBe(19)
  })

  it("should correctly calculate age if today is the birthday", () => {
    const birthDate = "2004-08-23"
    expect(age(birthDate)).toBe(20)
  })

  it("should correctly calculate age if today is the day after the birthday", () => {
    const birthDate = "2004-08-22"
    expect(age(birthDate)).toBe(20)
  })

  it("should correctly calculate age with long date format", () => {
    const birthDate = "August 23, 2000"
    expect(age(birthDate)).toBe(24)
  })

  it("should correctly calculate age with ISO 8601 format", () => {
    const birthDate = "2000-08-23T00:00:00Z"
    expect(age(birthDate)).toBe(24)
  })
})
