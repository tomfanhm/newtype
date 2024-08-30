import { describe, expect, it } from "vitest"
import isError from "./is-error"

describe("isError function", () => {
  it("should return true for error values", () => {
    expect(isError(new Error())).toBe(true)
    expect(isError(new TypeError())).toBe(true)
    expect(isError(new RangeError())).toBe(true)
    expect(isError(new SyntaxError())).toBe(true)
    expect(isError(new ReferenceError())).toBe(true)
    expect(isError(new EvalError())).toBe(true)
    expect(isError(new URIError())).toBe(true)
  })

  it("should return false for non-error values", () => {
    // Numbers
    expect(isError(42)).toBe(false)
    expect(isError(NaN)).toBe(false)
    expect(isError(Infinity)).toBe(false)
    expect(isError(-Infinity)).toBe(false)

    // Strings
    expect(isError("hello")).toBe(false)
    expect(isError(String("test"))).toBe(false)

    // Booleans
    expect(isError(true)).toBe(false)
    expect(isError(false)).toBe(false)

    // Null and Undefined
    expect(isError(null)).toBe(false)
    expect(isError(undefined)).toBe(false)

    // Objects
    expect(isError({})).toBe(false)
    expect(isError({ key: "value" })).toBe(false)
    expect(isError(new String("test"))).toBe(false)

    // Arrays
    expect(isError([])).toBe(false)
    expect(isError(["hello"])).toBe(false)

    // Functions
    expect(isError(() => {})).toBe(false)
    expect(isError(function () {})).toBe(false)

    // Symbols
    expect(isError(Symbol("test"))).toBe(false)

    // BigInt
    expect(isError(BigInt(9007199254740991))).toBe(false)

    // Dates
    expect(isError(new Date())).toBe(false)

    // Regular Expressions
    expect(isError(/regex/)).toBe(false)

    // Buffers and Typed Arrays
    expect(isError(Buffer.from("buffer"))).toBe(false)
    expect(isError(new Uint8Array([1, 2, 3]))).toBe(false)
  })
})
