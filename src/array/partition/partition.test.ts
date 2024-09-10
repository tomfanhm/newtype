import { describe, expect, it } from "vitest"
import partition from "./partition"

describe("partition function", () => {
  it("should partition an array of numbers based on a callback condition", () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const callback = (n: number) => n % 2 === 0
    const result = partition(arr, callback)
    expect(result).toEqual([
      [2, 4, 6],
      [1, 3, 5],
    ])
  })

  it("should partition an array of strings based on a callback condition", () => {
    const arr = ["apple", "banana", "cherry", "date"]
    const callback = (s: string) => s.length > 5
    const result = partition(arr, callback)
    expect(result).toEqual([
      ["banana", "cherry"],
      ["apple", "date"],
    ])
  })

  it("should handle an empty array", () => {
    const arr: number[] = []
    const callback = (n: number) => n % 2 === 0
    const result = partition(arr, callback)
    expect(result).toEqual([[], []])
  })

  it("should place all elements in the first partition if all match the condition", () => {
    const arr = [2, 4, 6, 8]
    const callback = (n: number) => n % 2 === 0
    const result = partition(arr, callback)
    expect(result).toEqual([[2, 4, 6, 8], []])
  })

  it("should place all elements in the second partition if none match the condition", () => {
    const arr = [1, 3, 5, 7]
    const callback = (n: number) => n % 2 === 0
    const result = partition(arr, callback)
    expect(result).toEqual([[], [1, 3, 5, 7]])
  })

  it("should handle complex data types like objects", () => {
    const arr = [
      { id: 1, active: true },
      { id: 2, active: false },
      { id: 3, active: true },
    ]
    const callback = (obj: { id: number; active: boolean }) => obj.active
    const result = partition(arr, callback)
    expect(result).toEqual([
      [
        { id: 1, active: true },
        { id: 3, active: true },
      ],
      [{ id: 2, active: false }],
    ])
  })

  it("should work with different data types in the array", () => {
    const arr = [1, "two", 3, "four"]
    const callback = (element: number | string) => typeof element === "string"
    const result = partition(arr, callback)
    expect(result).toEqual([
      ["two", "four"],
      [1, 3],
    ])
  })

  it("should partition correctly when callback returns different truthy values", () => {
    const arr = [0, 1, 2, 3, 4, 5]
    const callback = (n: number) => n > 2
    const result = partition(arr, callback)
    expect(result).toEqual([
      [3, 4, 5],
      [0, 1, 2],
    ])
  })

  it("should handle custom objects with methods in the callback", () => {
    class Item {
      constructor(
        public name: string,
        public value: number,
      ) {}
      isValuable() {
        return this.value > 50
      }
    }
    const arr = [new Item("A", 30), new Item("B", 60), new Item("C", 100)]
    const callback = (item: Item) => item.isValuable()
    const result = partition(arr, callback)
    expect(result).toEqual([[new Item("B", 60), new Item("C", 100)], [new Item("A", 30)]])
  })

  it("should not modify the original array", () => {
    const arr = [1, 2, 3, 4, 5, 6]
    const callback = (n: number) => n % 2 === 0
    partition(arr, callback)
    expect(arr).toEqual([1, 2, 3, 4, 5, 6])
  })
})
