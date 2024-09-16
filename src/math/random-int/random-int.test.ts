import { describe, expect, it } from "vitest"
import randomInt from "./random-int"

describe("randomInt function", () => {
  it("should return a number between the specified min and max (inclusive)", () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(1, 10)
      expect(result).toBeGreaterThanOrEqual(1)
      expect(result).toBeLessThanOrEqual(10)
    }
  })

  it("should return a number between negative min and max (inclusive)", () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(-10, -1)
      expect(result).toBeGreaterThanOrEqual(-10)
      expect(result).toBeLessThanOrEqual(-1)
    }
  })

  it("should return min when min and max are the same", () => {
    expect(randomInt(5, 5)).toBe(5)
    expect(randomInt(-10, -10)).toBe(-10)
  })

  it("should throw an error if min is greater than max", () => {
    expect(() => randomInt(10, 1)).toThrow("min must be less than or equal to max.")
    expect(() => randomInt(0, -5)).toThrow("min must be less than or equal to max.")
  })

  it("should return values correctly for large min and max", () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(1_000_000, 2_000_000)
      expect(result).toBeGreaterThanOrEqual(1_000_000)
      expect(result).toBeLessThanOrEqual(2_000_000)
    }
  })

  it("should return values correctly for large negative min and max", () => {
    for (let i = 0; i < 100; i++) {
      const result = randomInt(-2_000_000, -1_000_000)
      expect(result).toBeGreaterThanOrEqual(-2_000_000)
      expect(result).toBeLessThanOrEqual(-1_000_000)
    }
  })
})
