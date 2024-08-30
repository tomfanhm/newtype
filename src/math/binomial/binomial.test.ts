import { describe, expect, it } from "vitest"
import binomial from "./binomial"

describe("binomial function", () => {
  it("should return correct binomial probability for valid inputs", () => {
    expect(binomial(5, 3, 0.5)).toBe(0.3125) // n=5, k=3, p=0.5
    expect(binomial(10, 5, 0.5)).toBe(0.24609375) // n=10, k=5, p=0.5
  })

  it("should return 1 when n = 0 and k = 0, regardless of p", () => {
    expect(binomial(0, 0, 0.5)).toBe(1) // n=0, k=0, p=0.5
    expect(binomial(0, 0, 0)).toBe(1) // n=0, k=0, p=0
    expect(binomial(0, 0, 1)).toBe(1) // n=0, k=0, p=1
  })

  it("should return 0 when k > n", () => {
    expect(() => binomial(5, 6, 0.5)).toThrow("Invalid values for n or k. Ensure that 0 <= k <= n.")
  })

  it("should return correct value when p = 0", () => {
    expect(binomial(5, 0, 0)).toBe(1) // n=5, k=0, p=0
    expect(binomial(5, 5, 0)).toBe(0) // n=5, k=5, p=0
  })

  it("should return correct value when p = 1", () => {
    expect(binomial(5, 0, 1)).toBe(0) // n=5, k=0, p=1
    expect(binomial(5, 5, 1)).toBe(1) // n=5, k=5, p=1
  })

  it("should return correct value when n = k", () => {
    expect(binomial(5, 5, 0.5)).toBe(0.03125) // n=5, k=5, p=0.5
  })

  it("should return correct value for boundary value of p = 0.5", () => {
    expect(binomial(4, 2, 0.5)).toBe(0.375) // n=4, k=2, p=0.5
  })

  it("should return 0 for invalid inputs (n or k < 0, p out of bounds)", () => {
    expect(() => binomial(-5, 3, 0.5)).toThrow("Invalid values for n or k. Ensure that 0 <= k <= n.") // n<0
    expect(() => binomial(5, -3, 0.5)).toThrow("Invalid values for n or k. Ensure that 0 <= k <= n.") // k<0
    expect(() => binomial(5, 3, -0.1)).toThrow("Probability p must be between 0 and 1.") // p<0
    expect(() => binomial(5, 3, 1.1)).toThrow("Probability p must be between 0 and 1.") // p>1
  })
})
