import { describe, expect, it } from "vitest"
import lerp from "./lerp"

describe("lerp function", () => {
  it("should interpolate correctly", () => {
    expect(lerp(0, 10, 0)).toBe(0)
    expect(lerp(0, 10, 0.5)).toBe(5)
    expect(lerp(0, 10, 1)).toBe(10)
  })

  it("should handle negative values", () => {
    expect(lerp(-5, 5, 0)).toBe(-5)
    expect(lerp(-5, 5, 0.5)).toBe(0)
    expect(lerp(-5, 5, 1)).toBe(5)
  })

  it("should handle decimal values", () => {
    expect(lerp(0.5, 1.5, 0)).toBe(0.5)
    expect(lerp(0.5, 1.5, 0.25)).toBe(0.75)
    expect(lerp(0.5, 1.5, 0.5)).toBe(1)
    expect(lerp(0.5, 1.5, 0.75)).toBe(1.25)
    expect(lerp(0.5, 1.5, 1)).toBe(1.5)
  })
})
