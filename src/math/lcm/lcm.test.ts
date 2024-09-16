import { describe, expect, it } from "vitest"
import lcm from "./lcm"

describe("lcm function", () => {
  it("should calculate the LCM of an array of numbers", () => {
    expect(lcm([4, 5])).toBe(20)
    expect(lcm([6, 8])).toBe(24)
    expect(lcm([3, 7, 14])).toBe(42)
  })

  it("should return the LCM when array contains exactly 2 numbers", () => {
    expect(lcm([9, 12])).toBe(36)
    expect(lcm([15, 25])).toBe(75)
  })

  it("should calculate the LCM of multiple numbers in the array", () => {
    expect(lcm([2, 3, 4])).toBe(12)
    expect(lcm([5, 10, 15])).toBe(30)
    expect(lcm([1, 2, 3, 4, 5])).toBe(60)
  })

  it("should return the product of prime numbers as the LCM", () => {
    expect(lcm([2, 3, 5])).toBe(30)
    expect(lcm([7, 11, 13])).toBe(1001)
  })

  it("should throw an error if the array has fewer than 2 elements", () => {
    expect(() => lcm([10])).toThrow("Array should have at least 2 elements.")
    expect(() => lcm([])).toThrow("Array should have at least 2 elements.")
  })

  it("should throw an error if the array contains 0", () => {
    expect(() => lcm([0, 5])).toThrow("Array should not contain 0.")
    expect(() => lcm([3, 0, 7])).toThrow("Array should not contain 0.")
  })

  it("should calculate the LCM of large numbers", () => {
    expect(lcm([100, 250, 125])).toBe(500)
    expect(lcm([123456, 789012])).toBe(8117355456)
  })

  it("should calculate the LCM of negative numbers", () => {
    expect(lcm([-4, 5])).toBe(20)
    expect(lcm([6, -8])).toBe(24)
    expect(lcm([-3, -7, 14])).toBe(42)
  })
})
