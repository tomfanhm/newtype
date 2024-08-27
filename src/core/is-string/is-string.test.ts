import { describe, it, expect } from "vitest"
import isString from "./is-string"

describe("isString function", () => {
  it("should return true for string values", () => {
    expect(isString("")).toBe(true)
    expect(isString(" ")).toBe(true)
    expect(isString("a")).toBe(true)
    expect(isString("Hello, world!")).toBe(true)
    expect(isString("12345")).toBe(true)
    expect(isString(String("test"))).toBe(true)
    expect(isString(new String("test"))).toBe(true)
  })

  it("should return false for non-string values", () => {
    // Numbers
    expect(isString(42)).toBe(false)
    expect(isString(NaN)).toBe(false)
    expect(isString(Infinity)).toBe(false)
    expect(isString(-Infinity)).toBe(false)

    // Booleans
    expect(isString(true)).toBe(false)
    expect(isString(false)).toBe(false)

    // Null and Undefined
    expect(isString(null)).toBe(false)
    expect(isString(undefined)).toBe(false)

    // Objects
    expect(isString({})).toBe(false)
    expect(isString({ key: "test" })).toBe(false)

    // Arrays
    expect(isString([])).toBe(false)
    expect(isString([""])).toBe(false)

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
