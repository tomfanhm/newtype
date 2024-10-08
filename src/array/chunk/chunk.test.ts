import { describe, expect, it } from "vitest"
import chunks from "./chunk"

describe("chunk function", () => {
  it("should split an array into chunks of the given size", () => {
    const array = [1, 2, 3, 4, 5, 6]
    const chunkSize = 2
    const result = chunks(array, chunkSize)
    expect(result).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
    ])
  })

  it("should handle chunk size greater than the array length", () => {
    const array = [1, 2, 3]
    const chunkSize = 5
    const result = chunks(array, chunkSize)
    expect(result).toEqual([[1, 2, 3]])
  })

  it("should handle chunk size equal to the array length", () => {
    const array = [1, 2, 3]
    const chunkSize = 3
    const result = chunks(array, chunkSize)
    expect(result).toEqual([[1, 2, 3]])
  })

  it("should handle chunk size of 1", () => {
    const array = [1, 2, 3]
    const chunkSize = 1
    const result = chunks(array, chunkSize)
    expect(result).toEqual([[1], [2], [3]])
  })

  it("should handle empty array input", () => {
    const array: number[] = []
    const chunkSize = 3
    const result = chunks(array, chunkSize)
    expect(result).toEqual([])
  })

  it("should throw an error when chunk size is zero", () => {
    const array = [1, 2, 3]
    const chunkSize = 0
    expect(() => chunks(array, chunkSize)).toThrow("Chunk size must be greater than zero.")
  })

  it("should throw an error when chunk size is negative", () => {
    const array = [1, 2, 3]
    const chunkSize = -1
    expect(() => chunks(array, chunkSize)).toThrow("Chunk size must be greater than zero.")
  })

  it("should handle arrays with mixed types", () => {
    const array = [1, "two", { three: 3 }, [4]]
    const chunkSize = 2
    const result = chunks(array, chunkSize)
    expect(result).toEqual([
      [1, "two"],
      [{ three: 3 }, [4]],
    ])
  })

  it("should not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const arrCopy = [...arr]
    chunks(arr, 2)
    expect(arr).toEqual(arrCopy)
  })

  it("should throw an error when chunk size is not an integer", () => {
    const array = [1, 2, 3]
    const chunkSize = 1.5
    expect(() => chunks(array, chunkSize)).toThrow("Chunk size must be an integer.")
  })
})
