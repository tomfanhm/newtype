import { describe, expect, it } from "vitest"
import intersection from "./intersection"

describe("intersection function", () => {
  it("should return the intersection of two arrays with common elements", () => {
    const array1 = [1, 2, 3, 4]
    const array2 = [3, 4, 5, 6]
    const result = intersection(array1, array2)
    expect(result).toEqual([3, 4])
  })

  it("should return an empty array if there are no common elements", () => {
    const array1 = [1, 2, 3]
    const array2 = [4, 5, 6]
    const result = intersection(array1, array2)
    expect(result).toEqual([])
  })

  it("should return an empty array if the first array is empty", () => {
    const array1: number[] = []
    const array2 = [1, 2, 3]
    const result = intersection(array1, array2)
    expect(result).toEqual([])
  })

  it("should return an empty array if the second array is empty", () => {
    const array1 = [1, 2, 3]
    const array2: number[] = []
    const result = intersection(array1, array2)
    expect(result).toEqual([])
  })

  it("should return an empty array if both arrays are empty", () => {
    const array1: number[] = []
    const array2: number[] = []
    const result = intersection(array1, array2)
    expect(result).toEqual([])
  })

  it("should return only unique common elements when there are duplicates in the first array", () => {
    const array1 = [1, 2, 2, 3, 3, 4]
    const array2 = [2, 3]
    const result = intersection(array1, array2)
    expect(result).toEqual([2, 3])
  })

  it("should return only unique common elements when there are duplicates in the second array", () => {
    const array1 = [1, 2, 3]
    const array2 = [2, 2, 3, 3, 4]
    const result = intersection(array1, array2)
    expect(result).toEqual([2, 3])
  })

  it("should return the intersection of arrays containing strings", () => {
    const array1 = ["apple", "banana", "cherry"]
    const array2 = ["banana", "cherry", "date"]
    const result = intersection(array1, array2)
    expect(result).toEqual(["banana", "cherry"])
  })

  it("should return the intersection of arrays containing objects by reference", () => {
    const obj1 = { id: 1 }
    const obj2 = { id: 2 }
    const obj3 = { id: 3 }

    const array1 = [obj1, obj2]
    const array2 = [obj2, obj3]
    const result = intersection(array1, array2)
    expect(result).toEqual([obj2])
  })

  it("should return an empty array if no objects are shared by reference", () => {
    const array1 = [{ id: 1 }, { id: 2 }]
    const array2 = [{ id: 3 }, { id: 4 }]
    const result = intersection(array1, array2)
    expect(result).toEqual([])
  })

  it("should return the intersection when arrays contain mixed data types", () => {
    const array1 = [1, "apple", { id: 1 }]
    const array2 = ["apple", 2, { id: 1 }]
    const result = intersection(array1, array2)
    expect(result).toEqual(["apple"])
  })

  it("should return the intersection when arrays contain boolean values", () => {
    const array1 = [true, false, true]
    const array2 = [false, true]
    const result = intersection(array1, array2)
    expect(result).toEqual([true, false])
  })

  it("should handle large arrays efficiently", () => {
    const array1 = Array.from({ length: 100000 }, (_, i) => i)
    const array2 = Array.from({ length: 100000 }, (_, i) => i + 50000)
    const result = intersection(array1, array2)
    expect(result).toEqual(Array.from({ length: 50000 }, (_, i) => i + 50000))
  })

  it("should not modify the original arrays", () => {
    const array1 = [1, 2, 3]
    const array2 = [2, 3, 4]
    intersection(array1, array2)
    expect(array1).toEqual([1, 2, 3])
    expect(array2).toEqual([2, 3, 4])
  })
})
