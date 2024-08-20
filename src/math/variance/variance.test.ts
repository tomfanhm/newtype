import { describe, it, expect } from "vitest"
import variance from "./variance"

describe("variance function", () => {
  it("should return the correct variance for an array of positive numbers (sample)", () => {
    expect(variance([1, 2, 3, 4, 5])).toBe(2.5)
    expect(variance([10, 20, 30, 40, 50])).toBe(250)
  })

  it("should return the correct variance for an array of positive numbers (population)", () => {
    expect(variance([1, 2, 3, 4, 5], false)).toBe(2)
    expect(variance([10, 20, 30, 40, 50], false)).toBe(200)
  })

  it("should return the correct variance for an array of negative numbers (sample)", () => {
    expect(variance([-1, -2, -3, -4, -5])).toBe(2.5)
    expect(variance([-10, -20, -30, -40, -50])).toBe(250)
  })

  it("should return the correct variance for an array of negative numbers (population)", () => {
    expect(variance([-1, -2, -3, -4, -5], false)).toBe(2)
    expect(variance([-10, -20, -30, -40, -50], false)).toBe(200)
  })

  it("should return the correct variance for an array of mixed positive and negative numbers (sample)", () => {
    expect(variance([-1, 1])).toBe(2)
    expect(variance([10, -10])).toBe(200)
  })

  it("should return the correct variance for an array of mixed positive and negative numbers (population)", () => {
    expect(variance([-1, 1], false)).toBe(1)
    expect(variance([10, -10], false)).toBe(100)
  })

  it("should return the correct variance for an array of zeros (sample)", () => {
    expect(variance([0, 0, 0, 0])).toBe(0)
  })

  it("should return the correct variance for an array of zeros (population)", () => {
    expect(variance([0, 0, 0, 0], false)).toBe(0)
  })

  it("should return undefined when the array contains only one number", () => {
    expect(variance([10])).toBeUndefined()
  })

  it("should return undefined when the array is empty", () => {
    expect(variance([])).toBeUndefined()
  })
})
