import { describe, expect, it } from "vitest"
import iqr from "./iqr"

describe("iqr function", () => {
  it("should return the correct IQR for an odd number of elements", () => {
    const numbers = [1, 3, 5, 7, 9]
    expect(iqr(numbers)).toBe(6)
  })

  it("should return the correct IQR for an even number of elements", () => {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
    expect(iqr(numbers)).toBe(4)
  })

  it("should return 0 for an array with identical elements", () => {
    const numbers = [5, 5, 5, 5, 5]
    expect(iqr(numbers)).toBe(0)
  })

  it("should handle an array with negative numbers correctly", () => {
    const numbers = [-10, -5, 0, 5, 10]
    expect(iqr(numbers)).toBe(15)
  })

  it("should handle an array with mixed positive and negative numbers", () => {
    const numbers = [-10, -3, 0, 7, 20]
    expect(iqr(numbers)).toBe(20)
  })

  it("should handle float numbers", () => {
    const numbers = [1.5, 2.5, 3.5, 4.5, 5.5]
    expect(iqr(numbers)).toBe(3)
  })
})
