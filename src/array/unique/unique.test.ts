import { describe, expect, it } from "vitest"
import unique from "./unique"

describe("unique function", () => {
  it("should return an empty array when given an empty array", () => {
    const result = unique([])
    expect(result).toEqual([])
  })

  it("should return the same array if there are no duplicates", () => {
    const result = unique([1, 2, 3])
    expect(result).toEqual([1, 2, 3])
  })

  it("should remove duplicate numbers from the array", () => {
    const result = unique([1, 2, 2, 3, 4, 4, 5])
    expect(result).toEqual([1, 2, 3, 4, 5])
  })

  it("should remove duplicate strings from the array", () => {
    const result = unique(["a", "b", "b", "c", "a"])
    expect(result).toEqual(["a", "b", "c"])
  })

  it("should work with an array of objects with reference equality", () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 2 }
    const obj3 = { id: 1 } // Same content as obj1 but different reference
    const result = unique([obj1, obj2, obj1, obj3])
    expect(result).toEqual([obj1, obj2, obj3]) // obj3 is different from obj1 in reference
  })

  it("should remove duplicate booleans from the array", () => {
    const result = unique([true, false, true, false, true])
    expect(result).toEqual([true, false])
  })

  it("should handle mixed types and remove duplicates", () => {
    const result = unique([1, "1", 2, "2", 1, "1"])
    expect(result).toEqual([1, "1", 2, "2"])
  })

  it("should remove duplicate `undefined` and `null` values", () => {
    const result = unique([undefined, null, undefined, null])
    expect(result).toEqual([undefined, null])
  })

  it("should maintain the order of first occurrences", () => {
    const result = unique([3, 1, 2, 1, 3, 4])
    expect(result).toEqual([3, 1, 2, 4])
  })
})
