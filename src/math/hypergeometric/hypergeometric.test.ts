import { describe, expect, it } from "vitest"
import hypergeometric from "./hypergeometric"

describe("hypergeometric function", () => {
  it("should calculate the hypergeometric distribution for valid inputs", () => {
    expect(hypergeometric(50, 5, 10, 1)).toBe(0.4313371972285677)
    expect(hypergeometric(20, 7, 12, 3)).toBe(0.19865841073271415)
    expect(hypergeometric(100, 20, 10, 2)).toBe(0.3181706296100316)
  })

  it("should handle edge cases correctly", () => {
    expect(hypergeometric(1, 1, 1, 1)).toBe(1) // Smallest possible values
    expect(hypergeometric(100, 0, 10, 0)).toBe(1) // K = 0, k = 0
    expect(hypergeometric(100, 100, 10, 10)).toBe(1) // K = N, k = n
  })

  it("should throw an error when any parameter is negative", () => {
    expect(() => hypergeometric(-1, 5, 10, 3)).toThrow("All parameters must be non-negative.")
    expect(() => hypergeometric(50, -5, 10, 3)).toThrow("All parameters must be non-negative.")
    expect(() => hypergeometric(50, 5, -10, 3)).toThrow("All parameters must be non-negative.")
    expect(() => hypergeometric(50, 5, 10, -3)).toThrow("All parameters must be non-negative.")
  })

  it("should throw an error when any parameter is not an integer", () => {
    expect(() => hypergeometric(50.5, 5, 10, 3)).toThrow("All parameters must be integers.")
    expect(() => hypergeometric(50, 5.2, 10, 3)).toThrow("All parameters must be integers.")
    expect(() => hypergeometric(50, 5, 10.8, 3)).toThrow("All parameters must be integers.")
    expect(() => hypergeometric(50, 5, 10, 3.3)).toThrow("All parameters must be integers.")
  })

  it("should throw an error when K is greater than N", () => {
    expect(() => hypergeometric(50, 60, 10, 3)).toThrow(
      "Number of successes K cannot be greater than the population size N.",
    )
  })

  it("should throw an error when n is greater than N", () => {
    expect(() => hypergeometric(50, 5, 60, 3)).toThrow("Sample size n cannot be greater than the population size N.")
  })

  it("should throw an error when k is greater than the smaller of K or n", () => {
    expect(() => hypergeometric(50, 5, 10, 6)).toThrow(
      "Observed successes k cannot be greater than the smaller of K or n.",
    )
    expect(() => hypergeometric(50, 5, 3, 4)).toThrow(
      "Observed successes k cannot be greater than the smaller of K or n.",
    )
  })
})
