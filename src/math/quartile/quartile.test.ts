import { describe, it, expect } from "vitest"
import { q1, q2, q3, q4 } from "./quartile"

describe("quartile functions", () => {
  describe("q1 (First Quartile)", () => {
    it("should return the first quartile (Q1) of a sorted array", () => {
      const numbers = [1, 2, 3, 4]
      expect(q1(numbers)).toBe(1.5)
    })

    it("should return the first quartile (Q1) of an unsorted array", () => {
      const numbers = [4, 2, 1, 3]
      expect(q1(numbers)).toBe(1.5)
    })

    it("should handle an array with a single element", () => {
      const numbers = [1]
      expect(() => q1(numbers)).toThrow()
    })

    it("should handle an array with identical elements", () => {
      const numbers = [5, 5, 5, 5]
      expect(q1(numbers)).toBe(5)
    })

    it("should handle an empty array", () => {
      const numbers: number[] = []
      expect(() => q1(numbers)).toThrow()
    })

    it("should handle an array with negative numbers", () => {
      const numbers = [-5, -3, -1, 1]
      expect(q1(numbers)).toBe(-4)
    })

    it("should handle an array with large numbers", () => {
      const numbers = [1e10, 2e10, 3e10, 4e10]
      expect(q1(numbers)).toBe(1.5e10)
    })
  })

  describe("q2 (Second Quartile)", () => {
    it("should return the second quartile (Q2) of a sorted array", () => {
      const numbers = [1, 2, 3, 4]
      expect(q2(numbers)).toBe(2.5)
    })

    it("should return the second quartile (Q2) of an unsorted array", () => {
      const numbers = [4, 2, 1, 3]
      expect(q2(numbers)).toBe(2.5)
    })

    it("should handle an array with a single element", () => {
      const numbers = [1]
      expect(() => q2(numbers)).toThrow()
    })

    it("should handle an array with identical elements", () => {
      const numbers = [5, 5, 5, 5]
      expect(q2(numbers)).toBe(5)
    })

    it("should handle an empty array", () => {
      const numbers: number[] = []
      expect(() => q2(numbers)).toThrow()
    })

    it("should handle an array with negative numbers", () => {
      const numbers = [-5, -3, -1, 1]
      expect(q2(numbers)).toBe(-2)
    })

    it("should handle an array with large numbers", () => {
      const numbers = [1e10, 2e10, 3e10, 4e10]
      expect(q2(numbers)).toBe(2.5e10)
    })
  })

  describe("q3 (Third Quartile)", () => {
    it("should return the third quartile (Q3) of a sorted array", () => {
      const numbers = [1, 2, 3, 4]
      expect(q3(numbers)).toBe(3.5)
    })

    it("should return the third quartile (Q3) of an unsorted array", () => {
      const numbers = [4, 2, 1, 3]
      expect(q3(numbers)).toBe(3.5)
    })

    it("should handle an array with a single element", () => {
      const numbers = [1]
      expect(() => q3(numbers)).toThrow()
    })

    it("should handle an array with identical elements", () => {
      const numbers = [5, 5, 5, 5]
      expect(q3(numbers)).toBe(5)
    })

    it("should handle an empty array", () => {
      const numbers: number[] = []
      expect(() => q3(numbers)).toThrow()
    })

    it("should handle an array with negative numbers", () => {
      const numbers = [-5, -3, -1, 1]
      expect(q3(numbers)).toBe(0)
    })

    it("should handle an array with large numbers", () => {
      const numbers = [1e10, 2e10, 3e10, 4e10]
      expect(q3(numbers)).toBe(3.5e10)
    })
  })

  describe("q4 (Fourth Quartile)", () => {
    it("should return the fourth quartile (Q4) of a sorted array", () => {
      const numbers = [1, 2, 3, 4]
      expect(q4(numbers)).toBe(4)
    })

    it("should return the fourth quartile (Q4) of an unsorted array", () => {
      const numbers = [4, 2, 1, 3]
      expect(q4(numbers)).toBe(4)
    })

    it("should handle an array with a single element", () => {
      const numbers = [1]
      expect(() => q4(numbers)).toThrow()
    })

    it("should handle an array with identical elements", () => {
      const numbers = [5, 5, 5, 5]
      expect(q4(numbers)).toBe(5)
    })

    it("should handle an empty array", () => {
      const numbers: number[] = []
      expect(() => q4(numbers)).toThrow()
    })

    it("should handle an array with negative numbers", () => {
      const numbers = [-5, -3, -1, 1]
      expect(q4(numbers)).toBe(1)
    })

    it("should handle an array with large numbers", () => {
      const numbers = [1e10, 2e10, 3e10, 4e10]
      expect(q4(numbers)).toBe(4e10)
    })
  })
})
