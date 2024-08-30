import { describe, expect, it } from "vitest"
import isFunction from "./is-function"

describe("isFunction function", () => {
  it("should return true for function values", () => {
    expect(isFunction(() => {})).toBe(true)
    expect(isFunction(function () {})).toBe(true)
  })

  it("should return false for non-function values", () => {
    // Numbers
    expect(isFunction(42)).toBe(false)
    expect(isFunction(NaN)).toBe(false)
    expect(isFunction(Infinity)).toBe(false)
    expect(isFunction(-Infinity)).toBe(false)

    // Strings
    expect(isFunction("hello")).toBe(false)
    expect(isFunction(String("test"))).toBe(false)

    // Booleans
    expect(isFunction(true)).toBe(false)
    expect(isFunction(false)).toBe(false)

    // Null and Undefined
    expect(isFunction(null)).toBe(false)
    expect(isFunction(undefined)).toBe(false)

    // Objects
    expect(isFunction({})).toBe(false)
    expect(isFunction({ key: "value" })).toBe(false)
    expect(isFunction(new String("test"))).toBe(false)

    // Arrays
    expect(isFunction([])).toBe(false)
    expect(isFunction(["hello"])).toBe(false)

    // Symbols
    expect(isFunction(Symbol("test"))).toBe(false)

    // BigInt
    expect(isFunction(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isFunction(new Date())).toBe(false)

    // Regular Expressions
    expect(isFunction(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isFunction(Buffer.from("buffer"))).toBe(false)
    expect(isFunction(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
