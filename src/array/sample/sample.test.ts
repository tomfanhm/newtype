import { describe, it, expect } from "vitest"
import sample from "./sample"

describe("sample function", () => {
  it("should return the correct number of elements", () => {
    const arr = [1, 2, 3, 4, 5]
    const result = sample(arr, 3)
    expect(result).toHaveLength(3)
  })

  it("should return the correct number of elements when count is 1 (default)", () => {
    const arr = [1, 2, 3, 4, 5]
    const result = sample(arr)
    expect(result).toHaveLength(1)
  })

  it("should return an empty array when sampling from an empty array", () => {
    const arr: number[] = []
    const result = sample(arr, 3)
    expect(result).toEqual([])
  })

  it("should throw an error if count is 0 or less", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(() => sample(arr, 0)).toThrowError("Count must be greater than 0")
    expect(() => sample(arr, -1)).toThrowError("Count must be greater than 0")
  })

  it("should return the entire array if count is greater than the array length", () => {
    const arr = [1, 2, 3]
    const result = sample(arr, 5)
    expect(result).toHaveLength(3)
    expect(result).toEqual(expect.arrayContaining(arr))
  })

  it("should work with different types of arrays (number[], string[], object[])", () => {
    const numberArray = [1, 2, 3, 4, 5]
    const stringArray = ["a", "b", "c", "d", "e"]
    const objectArray = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]

    const numberSample = sample(numberArray, 2)
    const stringSample = sample(stringArray, 2)
    const objectSample = sample(objectArray, 2)

    expect(numberSample).toHaveLength(2)
    expect(stringSample).toHaveLength(2)
    expect(objectSample).toHaveLength(2)

    expect(numberArray).toEqual(expect.arrayContaining(numberSample))
    expect(stringArray).toEqual(expect.arrayContaining(stringSample))
    expect(objectArray).toEqual(expect.arrayContaining(objectSample))
  })

  it("should throw an error if count is not an integer", () => {
    const arr = [1, 2, 3, 4, 5]
    expect(() => sample(arr, 1.5)).toThrowError("Count must be an integer")
  })

  it("should not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5]
    const arrCopy = [...arr]
    sample(arr, 2)
    expect(arr).toEqual(arrCopy)
  })
})
