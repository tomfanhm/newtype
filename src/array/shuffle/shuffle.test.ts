import { describe, expect, it } from "vitest"
import shuffle from "./shuffle"

describe("shuffle function", () => {
  it("should return an empty array when input is an empty array", () => {
    const input: number[] = []
    const result = shuffle(input)
    expect(result).toEqual([])
  })

  it("should return the same array when it contains a single element", () => {
    const input = [42]
    const result = shuffle(input)
    expect(result).toEqual([42])
  })

  it("should return an array of the same length as the input", () => {
    const input = [1, 2, 3, 4, 5]
    const result = shuffle(input)
    expect(result).toHaveLength(input.length)
  })

  it("should contain the same elements after shuffling", () => {
    const input = [1, 2, 3, 4, 5]
    const result = shuffle([...input])
    expect(result.sort()).toEqual(input.sort())
  })

  it("should not modify the input array when shuffling", () => {
    const input = [1, 2, 3, 4, 5]
    const copy = [...input]
    shuffle(input)
    expect(input).toEqual(copy)
  })

  it("should shuffle arrays with various data types", () => {
    const input = [1, "a", true, null, { key: "value" }]
    const result = shuffle([...input])

    expect(result).toHaveLength(input.length)
    expect(result).toEqual(expect.arrayContaining(input))
  })

  it("should handle large arrays efficiently", () => {
    const input = Array.from({ length: 10000 }, (_, i) => i)
    const result = shuffle([...input])

    expect(result).toHaveLength(input.length)
    expect(result).toEqual(expect.arrayContaining(input))
  })
})
