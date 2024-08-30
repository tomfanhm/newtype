import { describe, expect, it } from "vitest"
import isArray from "./is-array"

describe("isArray function", () => {
  it("should return true for array values", () => {
    expect(isArray([])).toBe(true)
    expect(isArray([1, 2, 3])).toBe(true)
    expect(isArray([undefined])).toBe(true)
  })

  it("should return false for non-array values", () => {
    // Numbers
    expect(isArray(42)).toBe(false)
    expect(isArray(NaN)).toBe(false)
    expect(isArray(Infinity)).toBe(false)
    expect(isArray(-Infinity)).toBe(false)

    // Strings
    expect(isArray("hello")).toBe(false)
    expect(isArray(String("test"))).toBe(false)

    // Booleans
    expect(isArray(true)).toBe(false)
    expect(isArray(false)).toBe(false)

    // Null and Undefined
    expect(isArray(null)).toBe(false)
    expect(isArray(undefined)).toBe(false)

    // Objects
    expect(isArray({})).toBe(false)
    expect(isArray({ key: "value" })).toBe(false)
    expect(isArray(new String("test"))).toBe(false)

    // Functions
    expect(isArray(() => {})).toBe(false)
    expect(isArray(function () {})).toBe(false)

    // Symbols
    expect(isArray(Symbol("test"))).toBe(false)

    // BigInt
    expect(isArray(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isArray(new Date())).toBe(false)

    // Regular Expressions
    expect(isArray(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isArray(Buffer.from("buffer"))).toBe(false)
    expect(isArray(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
