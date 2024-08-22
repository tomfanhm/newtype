import { describe, it, expect } from "vitest"
import { isUndefined } from "./type-guard"

describe("isUndefined function", () => {
  it("should return true for undefined values", () => {
    expect(isUndefined(undefined)).toBe(true)
  })

  it("should return false for non-undefined values", () => {
    // Numbers
    expect(isUndefined(42)).toBe(false)
    expect(isUndefined(0)).toBe(false)
    expect(isUndefined(-42)).toBe(false)
    expect(isUndefined(3.14)).toBe(false)
    expect(isUndefined(Number.MAX_SAFE_INTEGER)).toBe(false)

    // Strings
    expect(isUndefined("undefined")).toBe(false)
    expect(isUndefined("")).toBe(false)
    expect(isUndefined(String("test"))).toBe(false)

    // Booleans
    expect(isUndefined(true)).toBe(false)
    expect(isUndefined(false)).toBe(false)

    // Null
    expect(isUndefined(null)).toBe(false)

    // Objects
    expect(isUndefined({})).toBe(false)
    expect(isUndefined({ key: "value" })).toBe(false)

    // Arrays
    expect(isUndefined([])).toBe(false)
    expect(isUndefined([undefined])).toBe(false)

    // Functions
    expect(isUndefined(() => {})).toBe(false)
    expect(isUndefined(function () {})).toBe(false)

    // Symbols
    expect(isUndefined(Symbol("test"))).toBe(false)

    // BigInt
    expect(isUndefined(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isUndefined(new Date())).toBe(false)

    // Regular Expressions
    expect(isUndefined(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isUndefined(Buffer.from("buffer"))).toBe(false)
    expect(isUndefined(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
