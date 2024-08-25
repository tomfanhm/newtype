import { describe, it, expect } from "vitest"
import { poisson } from "./poisson"

describe("poisson function", () => {
  it("should calculate the Poisson probability mass function for valid inputs", () => {
    expect(poisson(3, 0)).toBe(0.049787068367863944) // P(X=0) for lambda = 3
    expect(poisson(3, 1)).toBe(0.14936120510359183) // P(X=1) for lambda = 3
    expect(poisson(3, 3)).toBe(0.22404180765538775) // P(X=3) for lambda = 3
  })

  it("should return 1 when lambda and k are both 0", () => {
    expect(poisson(0, 0)).toBe(1) // P(X=0) for lambda = 0
  })

  it("should return 0 when lambda is 0 and k is positive", () => {
    expect(poisson(0, 1)).toBe(0) // P(X=1) for lambda = 0
    expect(poisson(0, 5)).toBe(0) // P(X=5) for lambda = 0
  })

  it("should handle large values of lambda and k", () => {
    expect(poisson(10, 10)).toBe(0.1251100357211333) // P(X=10) for lambda = 10
    expect(poisson(100, 100)).toBe(0.039860996809147155) // P(X=100) for lambda = 100
  })

  it("should throw an error when lambda is negative", () => {
    expect(() => poisson(-1, 5)).toThrow("Lambda must be non-negative.")
  })

  it("should throw an error when k is negative", () => {
    expect(() => poisson(5, -1)).toThrow("k must be non-negative.")
  })

  it("should throw an error when k is not an integer", () => {
    expect(() => poisson(5, 1.5)).toThrow("k must be an integer.")
  })
})
