import { describe, it, expect } from "vitest"
import gcd from "./gcd"

describe("gcd function", () => {
  it("should return the GCD of an array of positive numbers", () => {
    expect(gcd([12, 15, 21])).toBe(3)
    expect(gcd([8, 12, 16])).toBe(4)
    expect(gcd([7, 14, 28])).toBe(7)
  })

  it("should return the GCD when the array contains two numbers", () => {
    expect(gcd([48, 18])).toBe(6)
    expect(gcd([100, 25])).toBe(25)
  })

  it("should return 1 when the GCD is 1", () => {
    expect(gcd([7, 9, 13])).toBe(1)
    expect(gcd([14, 25, 49])).toBe(1)
  })

  it("should handle an array with zeroes correctly", () => {
    expect(gcd([0, 15])).toBe(15)
    expect(gcd([0, 0, 12])).toBe(12)
    expect(gcd([0, 0, 0])).toBe(0) // Edge case: All zeroes
  })

  it("should throw an error if the array has less than 2 elements", () => {
    expect(() => gcd([])).toThrow("Array should have at least 2 elements.")
    expect(() => gcd([1])).toThrow("Array should have at least 2 elements.")
  })

  it("should handle arrays with negative numbers", () => {
    expect(gcd([-12, -15, -21])).toBe(3)
    expect(gcd([-8, 12, -16])).toBe(4)
    expect(gcd([-7, 14, 28])).toBe(7)
  })

  it("should handle a mix of positive and negative numbers", () => {
    expect(gcd([12, -15, 21])).toBe(3)
    expect(gcd([-8, -12, 16])).toBe(4)
  })
})
