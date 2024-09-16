import { describe, expect, it } from "vitest"
import clamp from "./clamp"

describe("clamp function", () => {
  it("should return the value when it is within the range", () => {
    expect(clamp(5, 1, 10)).toBe(5)
    expect(clamp(0, -5, 5)).toBe(0)
  })

  it("should return the minimum when the value is below the range", () => {
    expect(clamp(0, 1, 10)).toBe(1)
    expect(clamp(-10, -5, 5)).toBe(-5)
  })

  it("should return the maximum when the value is above the range", () => {
    expect(clamp(15, 1, 10)).toBe(10)
    expect(clamp(10, -5, 5)).toBe(5)
  })

  it("should return the exact value when it equals the minimum or maximum", () => {
    expect(clamp(1, 1, 10)).toBe(1) // equals min
    expect(clamp(10, 1, 10)).toBe(10) // equals max
  })

  it("should clamp negative values correctly", () => {
    expect(clamp(-10, -20, -5)).toBe(-10)
    expect(clamp(-25, -20, -5)).toBe(-20) // below min
    expect(clamp(-2, -20, -5)).toBe(-5) // above max
  })

  it("should return the min/max value if min and max are the same", () => {
    expect(clamp(5, 5, 5)).toBe(5)
    expect(clamp(0, 5, 5)).toBe(5)
    expect(clamp(10, 5, 5)).toBe(5)
  })

  it("should throw an error if min is greater than max", () => {
    expect(() => clamp(5, 10, 5)).toThrow("min must be less than or equal to max.")
  })
})
