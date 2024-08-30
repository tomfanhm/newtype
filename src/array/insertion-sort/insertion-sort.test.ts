import { describe, expect, it } from "vitest"
import insertionSort from "./insertion-sort"

describe("insertionSort function", () => {
  it("should sort an array of numbers in ascending order", () => {
    const arr = [4, 2, 7, 1, 3]
    const sorted = insertionSort(arr, (a, b) => a - b)
    expect(sorted).toEqual([1, 2, 3, 4, 7])
  })

  it("should sort an array of numbers in descending order", () => {
    const arr = [4, 2, 7, 1, 3]
    const sorted = insertionSort(arr, (a, b) => b - a)
    expect(sorted).toEqual([7, 4, 3, 2, 1])
  })

  it("should handle an empty array", () => {
    const arr: number[] = []
    const sorted = insertionSort(arr, (a, b) => a - b)
    expect(sorted).toEqual([])
  })

  it("should handle an array with one element", () => {
    const arr = [42]
    const sorted = insertionSort(arr, (a, b) => a - b)
    expect(sorted).toEqual([42])
  })

  it("should handle an array with identical elements", () => {
    const arr = [5, 5, 5, 5]
    const sorted = insertionSort(arr, (a, b) => a - b)
    expect(sorted).toEqual([5, 5, 5, 5])
  })

  it("should sort an array of strings in alphabetical order", () => {
    const arr = ["banana", "apple", "cherry"]
    const sorted = insertionSort(arr, (a, b) => a.localeCompare(b))
    expect(sorted).toEqual(["apple", "banana", "cherry"])
  })

  it("should sort an array of strings in reverse alphabetical order", () => {
    const arr = ["banana", "apple", "cherry"]
    const sorted = insertionSort(arr, (a, b) => b.localeCompare(a))
    expect(sorted).toEqual(["cherry", "banana", "apple"])
  })

  it("should sort an array of objects by a numeric property", () => {
    const arr = [{ age: 30 }, { age: 20 }, { age: 40 }]
    const sorted = insertionSort(arr, (a, b) => a.age - b.age)
    expect(sorted).toEqual([{ age: 20 }, { age: 30 }, { age: 40 }])
  })

  it("should sort an array of objects by a string property", () => {
    const arr = [{ name: "banana" }, { name: "apple" }, { name: "cherry" }]
    const sorted = insertionSort(arr, (a, b) => a.name.localeCompare(b.name))
    expect(sorted).toEqual([{ name: "apple" }, { name: "banana" }, { name: "cherry" }])
  })

  it("should not modify the original array", () => {
    const arr = [4, 2, 7, 1, 3]
    const arrCopy = [...arr]
    insertionSort(arr, (a, b) => a - b)
    expect(arr).toEqual(arrCopy)
  })

  it("should handle large arrays efficiently", () => {
    const arr = Array.from({ length: 1000 }, (_, i) => 1000 - i)
    const sorted = insertionSort(arr, (a, b) => a - b)
    expect(sorted).toEqual(Array.from({ length: 1000 }, (_, i) => i + 1))
  })
})
