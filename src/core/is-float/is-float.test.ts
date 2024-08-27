import { describe, it, expect } from "vitest"
import isFloat from "./is-float"

describe("isFloat function", () => {
  it("should return true for float values", () => {
    expect(isFloat(0.5)).toBe(true)
    expect(isFloat(-0.5)).toBe(true)
    expect(isFloat(42.42)).toBe(true)
    expect(isFloat(-42.42)).toBe(true)
  })

  it("should return false for non-float values", () => {
    // Numbers
    expect(isFloat(42)).toBe(false)
    expect(isFloat(NaN)).toBe(false)
    expect(isFloat(0)).toBe(false)
    expect(isFloat(Infinity)).toBe(false)
    expect(isFloat(-Infinity)).toBe(false)

    // Strings
    expect(isFloat("42")).toBe(false)
    expect(isFloat("0")).toBe(false)
    expect(isFloat("42.42")).toBe(false)
    expect(isFloat("0.5")).toBe(false)

    // Booleans
    expect(isFloat(true)).toBe(false)
    expect(isFloat(false)).toBe(false)

    // Null and Undefined
    expect(isFloat(null)).toBe(false)
    expect(isFloat(undefined)).toBe(false)

    // Objects
    expect(isFloat({})).toBe(false)
    expect(isFloat({ key: "value" })).toBe(false)

    // Arrays
    expect(isFloat([])).toBe(false)
    expect(isFloat([42])).toBe(false)

    // Functions
    expect(isFloat(() => {})).toBe(false)
    expect(isFloat(function () {})).toBe(false)

    // Symbols
    expect(isFloat(Symbol("test"))).toBe(false)

    // BigInt
    expect(isFloat(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isFloat(new Date())).toBe(false)

    // Regular Expressions
    expect(isFloat(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isFloat(Buffer.from("buffer"))).toBe(false)
    expect(isFloat(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
