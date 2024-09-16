import { describe, expect, it } from "vitest"
import formatDate from "./format-date"

describe("formatDate function", () => {
  const testDateStr = "2024-09-16T12:00:00Z"

  it('should format the date in "YYYY-MM-DD" format', () => {
    expect(formatDate(testDateStr, "YYYY-MM-DD")).toBe("2024-09-16")
  })

  it('should format the date in "MM/DD/YYYY" format', () => {
    expect(formatDate(testDateStr, "MM/DD/YYYY")).toBe("09/16/2024")
  })

  it('should format the date in "DD-MM-YYYY" format', () => {
    expect(formatDate(testDateStr, "DD-MM-YYYY")).toBe("16-09-2024")
  })

  it("should format single-digit days and months correctly with padding", () => {
    expect(formatDate("2024-01-05", "YYYY-MM-DD")).toBe("2024-01-05")
    expect(formatDate("2024-01-05", "MM/DD/YYYY")).toBe("01/05/2024")
    expect(formatDate("2024-01-05", "DD-MM-YYYY")).toBe("05-01-2024")
  })

  it("should correctly format leap year dates", () => {
    expect(formatDate("2020-02-29", "YYYY-MM-DD")).toBe("2020-02-29")
  })

  it("should throw an error for invalid date strings", () => {
    expect(() => formatDate("invalid-date", "YYYY-MM-DD")).toThrow("Invalid date string.")
  })

  it("should handle different order of date components", () => {
    expect(formatDate(testDateStr, "YYYY/MM/DD")).toBe("2024/09/16")
    expect(formatDate(testDateStr, "DD.MM.YYYY")).toBe("16.09.2024")
  })

  it("should return the input format string unaltered if it contains unsupported tokens", () => {
    expect(formatDate(testDateStr, "YY-MM-DD")).toBe("YY-09-16") // No "YY" support
    expect(formatDate(testDateStr, "YYYY-MM-DD-SS")).toBe("2024-09-16-SS") // No "SS" support
  })

  it("should correctly format the first and last days of the year", () => {
    expect(formatDate("2024-12-31", "YYYY-MM-DD")).toBe("2024-12-31")
    expect(formatDate("2024-01-01", "YYYY-MM-DD")).toBe("2024-01-01")
  })
})
