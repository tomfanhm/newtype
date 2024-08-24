import { describe, it, expect } from "vitest"
import compact from "./compact"

describe("compact function", () => {
  it("should remove null and undefined values from the array", () => {
    const input = [1, null, undefined, 2, 3, undefined, 4]
    const expected = [1, 2, 3, 4]
    expect(compact(input)).toEqual(expected)
  })

  it('should remove only falsy values (null, undefined, false, 0, NaN, "") but keeps other values', () => {
    const input = [false, 0, NaN, "", "hello", true, 42]
    const expected = ["hello", true, 42]
    expect(compact(input)).toEqual(expected)
  })

  it("should keep values that are not null or undefined", () => {
    const input = [1, 2, 3]
    const expected = [1, 2, 3]
    expect(compact(input)).toEqual(expected)
  })

  it("should return an empty array if the input array is empty", () => {
    const input: [] = []
    const expected: [] = []
    expect(compact(input)).toEqual(expected)
  })

  it("should remove empty arrays and objects if treated as falsy in the logic", () => {
    const input = [[], {}, 1, 2]
    const expected = [[], {}, 1, 2]
    expect(compact(input)).toEqual(expected)
  })

  it("should return an empty array if all elements are null or undefined", () => {
    const input = [null, undefined, undefined, null]
    const expected: [] = []
    expect(compact(input)).toEqual(expected)
  })

  it("should work with mixed types in the array", () => {
    const input = [null, undefined, 1, "a", {}, [], true, false]
    const expected = [1, "a", {}, [], true]
    expect(compact(input)).toEqual(expected)
  })

  it("should handle an array of objects correctly, removing only null and undefined values", () => {
    const input = [{}, null, { a: 1 }, undefined]
    const expected = [{}, { a: 1 }]
    expect(compact(input)).toEqual(expected)
  })

  it("should not remove nested null or undefined values within arrays", () => {
    const input = [[1, null], [undefined, 2], 3]
    const expected = [[1, null], [undefined, 2], 3]
    expect(compact(input)).toEqual(expected)
  })
})
