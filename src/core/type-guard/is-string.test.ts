import { describe, it, expect } from "vitest"
import { isString } from "./type-guard"

describe("isString function", () => {
  it("should return true for string values", () => {
    expect(isString("")).toBe(true)
    expect(isString("hello")).toBe(true)
    expect(isString(String("test"))).toBe(true) // String object
  })

  it("should return false for non-string values", () => {
    // Numbers
    expect(isString(42)).toBe(false)
    expect(isString(NaN)).toBe(false)
    expect(isString(Infinity)).toBe(false)

    // Booleans
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)

    // Null and Undefined
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)

    // Objects
    expect(isString({})).toBe(false)
    expect(isString({ key: "value" })).toBe(false)
    expect(isString(new String("test"))).toBe(false) // String object is not a primitive string

    // Arrays
    expect(isString([])).toBe(false)
    expect(isString(["hello"])).toBe(false)

    // Functions
    expect(isString(() => {})).toBe(false)
    expect(isString(function () {})).toBe(false)

    // Symbols
    expect(isString(Symbol("test"))).toBe(false)

    // BigInt
    expect(isString(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isString(new Date())).toBe(false)

    // Regular Expressions
    expect(isString(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isString(Buffer.from("buffer"))).toBe(false)
    expect(isString(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
