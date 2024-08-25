import { describe, it, expect } from "vitest"
import all from "./all"

describe("all function", () => {
  it("should return true for an empty array", () => {
    const result = all([])
    expect(result).toBe(true)
  })

  it("should return true for an array with only truthy values", () => {
    const result = all([1, "string", true, [], {}])
    expect(result).toBe(true)
  })

  it("should return false for an array with at least one falsy value", () => {
    const result = all([1, "", true, [], {}])
    expect(result).toBe(false)
  })

  it("should return false for an array with only falsy values", () => {
    const result = all([0, "", false, null, undefined, NaN])
    expect(result).toBe(false)
  })

  it("should return false for an array with a mixture of truthy and falsy values", () => {
    const result = all([0, 1, "", "string", null, true, undefined])
    expect(result).toBe(false)
  })

  it("should return true for an array of objects", () => {
    const result = all([{ a: 1 }, { b: 2 }, {}])
    expect(result).toBe(true)
  })

  it("should return true for an array of empty arrays", () => {
    const result = all([[], [], []])
    expect(result).toBe(true)
  })

  it("should return true for an array of functions", () => {
    const result = all([() => {}, function () {}, async () => {}])
    expect(result).toBe(true)
  })

  it("should return true for an array with mixed types but all truthy", () => {
    const result = all([1, "non-empty", true, [1, 2], { key: "value" }, () => {}])
    expect(result).toBe(true)
  })

  it("should return false for an array with mixed types including falsy", () => {
    const result = all([1, "", true, [1, 2], { key: "value" }, () => {}])
    expect(result).toBe(false)
  })
})
