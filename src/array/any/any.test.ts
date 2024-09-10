import { describe, expect, it } from "vitest"
import any from "./any"

describe("any function", () => {
  it("should return false for an empty array", () => {
    const result = any([])
    expect(result).toBe(false)
  })

  it("should return true for an array with only truthy values", () => {
    const result = any([1, "string", true, [], {}])
    expect(result).toBe(true)
  })

  it("should return true for an array with at least one truthy value", () => {
    const result = any([0, "", false, null, 1])
    expect(result).toBe(true)
  })

  it("should return false for an array with only falsy values", () => {
    const result = any([0, "", false, null, undefined, NaN])
    expect(result).toBe(false)
  })

  it("should return true for an array with a mixture of truthy and falsy values", () => {
    const result = any([0, 1, "", "string", null, true, undefined])
    expect(result).toBe(true)
  })

  it("should return true for an array of objects", () => {
    const result = any([{ a: 1 }, { b: 2 }, {}])
    expect(result).toBe(true)
  })

  it("should return true for an array of empty arrays", () => {
    const result = any([[], [], []])
    expect(result).toBe(true)
  })

  it("should return true for an array of functions", () => {
    const result = any([() => {}, function () {}, async () => {}])
    expect(result).toBe(true)
  })

  it("should return true for an array with mixed types but one truthy", () => {
    const result = any([0, "", false, [], null])
    expect(result).toBe(true)
  })

  it("should return false for an array with mixed types but no truthy", () => {
    const result = any([0, "", false, null, undefined])
    expect(result).toBe(false)
  })

  it("should not modify the original array", () => {
    const arr = [1, 2, 3]
    any(arr)
    expect(arr).toEqual([1, 2, 3])
  })
})
