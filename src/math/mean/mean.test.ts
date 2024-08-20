import { describe, it, expect } from "vitest"
import mean from "./mean"

describe("mean function", () => {
  it("should return the correct mean for an array of positive numbers", () => {
    expect(mean([1, 2, 3, 4, 5])).toBe(3)
    expect(mean([10, 20, 30, 40, 50])).toBe(30)
  })

  it("should return the correct mean for an array of negative numbers", () => {
    expect(mean([-1, -2, -3, -4, -5])).toBe(-3)
    expect(mean([-10, -20, -30, -40, -50])).toBe(-30)
  })

  it("should return the correct mean for an array of mixed positive and negative numbers", () => {
    expect(mean([-1, 1, -1, 1])).toBe(0)
    expect(mean([10, -10, 20, -20])).toBe(0)
  })

  it("should return the correct mean for an array of zeros", () => {
    expect(mean([0, 0, 0, 0])).toBe(0)
  })

  it("should return the number itself when the array contains only one number", () => {
    expect(mean([10])).toBe(10)
    expect(mean([-10])).toBe(-10)
  })

  it("should return undefined when the array is empty", () => {
    expect(mean([])).toBeUndefined()
  })

  it("should return the number itself when the array contains a single large number", () => {
    expect(mean([1000000000])).toBe(1000000000)
  })

  it("should return the correct mean for an array of large positive and negative numbers", () => {
    expect(mean([1000000000, -1000000000])).toBe(0)
  })

  it("should return the correct mean for an array of very small numbers", () => {
    expect(mean([0.0000001, 0.0000002, 0.0000003])).toBeCloseTo(0.0000002)
  })

  it("should return the correct mean for an array of very small and very large numbers", () => {
    expect(mean([0.0000001, 1000000000])).toBeCloseTo(500000000.00000005)
  })
})
