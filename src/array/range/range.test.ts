import { describe, it, expect } from "vitest"
import range from "./range"

describe("range function", () => {
  it("should generate a range with positive step", () => {
    expect(range(1, 5)).toEqual([1, 2, 3, 4])
  })

  it("should generate a range with negative step", () => {
    expect(range(5, 1, -1)).toEqual([5, 4, 3, 2])
  })

  it("should include start but not end in the range", () => {
    expect(range(0, 4)).toEqual([0, 1, 2, 3])
  })

  it("should handle a large positive step", () => {
    expect(range(0, 10, 3)).toEqual([0, 3, 6, 9])
  })

  it("should handle a large negative step", () => {
    expect(range(10, 0, -3)).toEqual([10, 7, 4, 1])
  })

  it("should return an empty array if start equals end", () => {
    expect(range(5, 5)).toEqual([])
  })

  it("should throw an error if start, end, or step is not a number", () => {
    expect(() => range(NaN, 5)).toThrow("Start, end, and step must be numbers.")
    expect(() => range(1, NaN)).toThrow("Start, end, and step must be numbers.")
    expect(() => range(1, 5, NaN)).toThrow("Start, end, and step must be numbers.")
  })

  it("should throw an error if step is zero", () => {
    expect(() => range(1, 5, 0)).toThrow("Step cannot be zero.")
  })

  it("should handle fractional steps correctly", () => {
    expect(range(0, 1, 0.25)).toEqual([0, 0.25, 0.5, 0.75])
  })

  it("should handle negative fractional steps correctly", () => {
    expect(range(1, 0, -0.25)).toEqual([1, 0.75, 0.5, 0.25])
  })

  it("should work with a large range", () => {
    const result = range(0, 10000)
    expect(result.length).toBe(10000)
    expect(result[0]).toBe(0)
    expect(result[9999]).toBe(9999)
  })

  it("should return the correct array when start is greater than end with a positive step", () => {
    expect(range(5, 1, 1)).toEqual([])
  })

  it("should return the correct array when start is less than end with a negative step", () => {
    expect(range(1, 5, -1)).toEqual([])
  })
})
