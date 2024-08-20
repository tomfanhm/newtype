import { describe, expect, it } from "vitest"
import sum from "./sum"

describe("sum function", () => {
  it("should return the sum of all numbers in an array", () => {
    const input = [1, 2, 3, 4, 5]
    const expected = 15
    expect(sum(input)).toBe(expected)
  })

  it("should handle negative numbers correctly", () => {
    const input = [-1, -2, -3, -4, -5]
    const expected = -15
    expect(sum(input)).toBe(expected)
  })

  it("should return 0 for an empty array", () => {
    const input: number[] = []
    const expected = 0
    expect(sum(input)).toBe(expected)
  })

  it("should return the same number if the array has only one element", () => {
    const input = [7]
    const expected = 7
    expect(sum(input)).toBe(expected)
  })

  it("should return 0 if all elements are zeros", () => {
    const input = [0, 0, 0, 0]
    const expected = 0
    expect(sum(input)).toBe(expected)
  })
})
