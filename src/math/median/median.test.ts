import { describe, expect, it } from "vitest"
import median from "./median"

describe("median function", () => {
  it("should throw an error when the array is empty", () => {
    expect(() => median([])).toThrow("The array is empty.")
  })

  it("should return the only element for a single-element array", () => {
    expect(median([5])).toBe(5)
    expect(median([-10])).toBe(-10)
  })

  it("should return the median for an odd-length array", () => {
    expect(median([1, 3, 5])).toBe(3)
    expect(median([10, 2, 8, 6, 4])).toBe(6)
    expect(median([7, 1, 9])).toBe(7)
  })

  it("should return the median for an even-length array", () => {
    expect(median([1, 2, 3, 4])).toBe(2.5)
    expect(median([7, 3, 5, 1])).toBe(4)
    expect(median([-1, -2, -3, -4])).toBe(-2.5)
  })

  it("should handle arrays with duplicate values correctly", () => {
    expect(median([1, 2, 2, 3, 4])).toBe(2)
    expect(median([5, 3, 3, 5, 5])).toBe(5)
  })

  it("should handle arrays with negative numbers", () => {
    expect(median([-3, -1, -2, -5, -4])).toBe(-3)
    expect(median([-2, -1, -3, -4])).toBe(-2.5)
  })

  it("should handle arrays with floating point numbers", () => {
    expect(median([1.1, 2.2, 3.3])).toBe(2.2)
    expect(median([1.1, 2.2, 3.3, 4.4])).toBe(2.75)
    expect(median([1.5, 3.5, 2.5])).toBe(2.5)
  })

  it("should handle already sorted arrays", () => {
    expect(median([1, 2, 3, 4, 5])).toBe(3)
    expect(median([1, 2, 3, 4])).toBe(2.5)
  })

  it("should handle arrays with all identical elements", () => {
    expect(median([1, 1, 1, 1])).toBe(1)
    expect(median([0, 0, 0, 0, 0])).toBe(0)
  })

  it("should handle large arrays efficiently", () => {
    const largeArray = Array.from({ length: 1000000 }, (_, i) => i + 1)
    expect(median(largeArray)).toBe(500000.5)
  })
})
