import { describe, expect, it } from "vitest"
import factorial from "./factorial"

describe("factorial function", () => {
  it("should return 1 when n is 0", () => {
    expect(factorial(0)).toBe(1)
  })

  it("should return 1 when n is 1", () => {
    expect(factorial(1)).toBe(1)
  })

  it("should return the correct factorial for a positive integer n", () => {
    expect(factorial(5)).toBe(120) // 5! = 120
    expect(factorial(3)).toBe(6) // 3! = 6
    expect(factorial(10)).toBe(3628800) // 10! = 3628800
  })

  it("should return the correct factorial for a large positive integer n", () => {
    expect(factorial(15)).toBe(1307674368000) // 15! = 1307674368000
  })

  it("should throw an error when n is a negative number", () => {
    expect(() => factorial(-1)).toThrow("Factorial is not defined for negative numbers.")
    expect(() => factorial(-5)).toThrow("Factorial is not defined for negative numbers.")
  })

  it("should throw an error when n is not an integer", () => {
    expect(() => factorial(1.5)).toThrow("Factorial is only defined for integers.")
    expect(() => factorial(2.3)).toThrow("Factorial is only defined for integers.")
    expect(() => factorial(Math.PI)).toThrow("Factorial is only defined for integers.")
  })

  it("should handle large values", () => {
    expect(() => factorial(100)).not.toThrow()
  })
})
