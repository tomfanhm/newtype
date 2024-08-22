import { describe, it, expect } from "vitest"
import { isInteger } from "./type-guard"

describe("isInteger function", () => {
  it("should return true for integer values", () => {
    expect(isInteger(0)).toBe(true)
    expect(isInteger(42)).toBe(true)
    expect(isInteger(-42)).toBe(true)
    expect(isInteger(9007199254740991)).toBe(true) // Largest safe integer
    expect(isInteger(-9007199254740991)).toBe(true) // Smallest safe integer
  })

  it("should return false for non-integer values", () => {
    // Numbers
    expect(isInteger(NaN)).toBe(false)
    expect(isInteger(Infinity)).toBe(false)
    expect(isInteger(-Infinity)).toBe(false)
    expect(isInteger(0.5)).toBe(false)
    expect(isInteger(-0.5)).toBe(false)

    // Strings
    expect(isInteger("42")).toBe(false)
    expect(isInteger("0")).toBe(false)
    expect(isInteger("9007199254740991")).toBe(false)
    expect(isInteger("-9007199254740991")).toBe(false)

    // Booleans
    expect(isInteger(true)).toBe(false)
    expect(isInteger(false)).toBe(false)

    // Null and Undefined
    expect(isInteger(null)).toBe(false)
    expect(isInteger(undefined)).toBe(false)

    // Objects
    expect(isInteger({})).toBe(false)
    expect(isInteger({ key: "value" })).toBe(false)

    // Arrays
    expect(isInteger([])).toBe(false)
    expect(isInteger([42])).toBe(false)

    // Functions
    expect(isInteger(() => {})).toBe(false)
    expect(isInteger(function () {})).toBe(false)

    // Symbols
    expect(isInteger(Symbol("test"))).toBe(false)

    // BigInt
    expect(isInteger(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isInteger(new Date())).toBe(false)

    // Regular Expressions
    expect(isInteger(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isInteger(Buffer.from("buffer"))).toBe(false)
    expect(isInteger(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
