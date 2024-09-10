import { describe, expect, it } from "vitest"
import permutations from "./permutations"

describe("permutations function", () => {
  it("should return the correct permutations for an empty array", () => {
    const result = permutations([])
    expect(result).toEqual([])
  })

  it("should return the correct permutations for a single-element array", () => {
    const result = permutations([1])
    expect(result).toEqual([[1]])
  })

  it("should return the correct permutations for a two-element array", () => {
    const result = permutations([1, 2])
    expect(result).toEqual([
      [1, 2],
      [2, 1],
    ])
  })

  it("should return the correct permutations for a three-element array", () => {
    const result = permutations([1, 2, 3])
    expect(result).toEqual([
      [1, 2, 3],
      [1, 3, 2],
      [2, 1, 3],
      [2, 3, 1],
      [3, 1, 2],
      [3, 2, 1],
    ])
  })

  it("should handle an array of strings", () => {
    const result = permutations(["a", "b"])
    expect(result).toEqual([
      ["a", "b"],
      ["b", "a"],
    ])
  })

  it("should handle an array of objects", () => {
    const obj1 = { key: "value1" }
    const obj2 = { key: "value2" }
    const result = permutations([obj1, obj2])
    expect(result).toEqual([
      [obj1, obj2],
      [obj2, obj1],
    ])
  })

  it("should handle an array with duplicate elements", () => {
    const result = permutations([1, 1])
    expect(result).toEqual([
      [1, 1],
      [1, 1],
    ])
  })

  it("should handle a large array", () => {
    const array = [1, 2, 3, 4]
    const result = permutations(array)
    const expected = [
      [1, 2, 3, 4],
      [1, 2, 4, 3],
      [1, 3, 2, 4],
      [1, 3, 4, 2],
      [1, 4, 2, 3],
      [1, 4, 3, 2],
      [2, 1, 3, 4],
      [2, 1, 4, 3],
      [2, 3, 1, 4],
      [2, 3, 4, 1],
      [2, 4, 1, 3],
      [2, 4, 3, 1],
      [3, 1, 2, 4],
      [3, 1, 4, 2],
      [3, 2, 1, 4],
      [3, 2, 4, 1],
      [3, 4, 1, 2],
      [3, 4, 2, 1],
      [4, 1, 2, 3],
      [4, 1, 3, 2],
      [4, 2, 1, 3],
      [4, 2, 3, 1],
      [4, 3, 1, 2],
      [4, 3, 2, 1],
    ]
    expect(result).toEqual(expected)
  })

  it("should handle an array with mixed types", () => {
    const result = permutations([1, "a"])
    expect(result).toEqual([
      [1, "a"],
      ["a", 1],
    ])
  })

  it("should not modify the original array", () => {
    const array = [1, 2, 3]
    permutations(array)
    expect(array).toEqual([1, 2, 3])
  })
})
