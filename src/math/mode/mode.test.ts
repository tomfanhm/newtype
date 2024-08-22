import { describe, it, expect } from "vitest"
import mode from "./mode"

describe("mode function", () => {
  it("should throw an error when the array is empty", () => {
    expect(() => mode([])).toThrow("The array is empty.")
  })

  it("should return the single element for an array with one element", () => {
    expect(mode([5])).toEqual([5])
  })

  it("should return the correct mode for an array with distinct elements", () => {
    expect(mode([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  })

  it("should return the correct mode for an array with one mode", () => {
    expect(mode([1, 2, 2, 3, 4])).toEqual([2])
    expect(mode([7, 8, 8, 8, 9])).toEqual([8])
  })

  it("should return multiple modes when there is a tie", () => {
    expect(mode([1, 1, 2, 2, 3])).toEqual([1, 2])
    expect(mode([4, 4, 5, 5, 6, 6])).toEqual([4, 5, 6])
  })

  it("should handle negative numbers correctly", () => {
    expect(mode([-1, -1, 2, 3, 3])).toEqual([3, -1])
    expect(mode([-5, -5, -4, -4, -3])).toEqual([-5, -4])
  })

  it("should handle an array with all identical elements", () => {
    expect(mode([7, 7, 7, 7])).toEqual([7])
  })

  it("should handle an array where the mode is zero", () => {
    expect(mode([0, 1, 1, 2, 0, 0])).toEqual([0])
  })

  it("should handle an array with decimal numbers", () => {
    expect(mode([1.1, 2.2, 2.2, 3.3])).toEqual([2.2])
    expect(mode([1.1, 1.1, 2.2, 2.2])).toEqual([1.1, 2.2])
  })

  it("should handle an array with both positive and negative numbers", () => {
    expect(mode([-1, 1, 1, -1, -1])).toEqual([-1])
  })

  it("should handle large arrays efficiently", () => {
    const largeArray = new Array(10000).fill(1).concat(new Array(9999).fill(2))
    expect(mode(largeArray)).toEqual([1])
  })

  it("should handle an array with NaN values", () => {
    expect(mode([NaN, NaN, 2, 3])).toEqual([NaN])
  })

  it("should handle an array with Infinity values", () => {
    expect(mode([Infinity, Infinity, 1, 2])).toEqual([Infinity])
    expect(mode([Infinity, 1, 1, 2, 2])).toEqual([1, 2])
  })
})
