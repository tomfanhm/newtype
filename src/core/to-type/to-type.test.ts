import { describe, it, expect } from "vitest"
import toType from "./to-type"

describe("toType function", () => {
  it('should return "string" for a string value', () => {
    expect(toType("Hello")).toBe("string")
  })

  it('should return "number" for a number value', () => {
    expect(toType(42)).toBe("number")
    expect(toType(NaN)).toBe("number")
    expect(toType(Infinity)).toBe("number")
    expect(toType(-Infinity)).toBe("number")
  })

  it('should return "boolean" for a boolean value', () => {
    expect(toType(true)).toBe("boolean")
    expect(toType(false)).toBe("boolean")
  })

  it('should return "undefined" for an undefined value', () => {
    expect(toType(undefined)).toBe("undefined")
  })

  it('should return "null" for a null value', () => {
    expect(toType(null)).toBe("null")
  })

  it('should return "symbol" for a symbol value', () => {
    expect(toType(Symbol("test"))).toBe("symbol")
  })

  it('should return "bigint" for a bigint value', () => {
    expect(toType(BigInt(9007199254740991))).toBe("bigint")
  })

  it('should return "object" for a plain object', () => {
    expect(toType({})).toBe("object")
    expect(toType({ key: "value" })).toBe("object")
  })

  it('should return "array" for an array', () => {
    expect(toType([])).toBe("array")
    expect(toType([1, 2, 3])).toBe("array")
  })

  it('should return "function" for a function', () => {
    expect(toType(function () {})).toBe("function")
    expect(toType(() => {})).toBe("function")
    expect(toType(async () => {})).toBe("asyncfunction")
    expect(toType(function* () {})).toBe("generatorfunction")
  })

  it('should return "regexp" for a regular expression', () => {
    expect(toType(/abc/)).toBe("regexp")
    expect(toType(new RegExp("abc"))).toBe("regexp")
  })

  it('should return "date" for a Date object', () => {
    expect(toType(new Date())).toBe("date")
  })

  it('should return "error" for an Error object', () => {
    expect(toType(new Error())).toBe("error")
    expect(toType(new TypeError())).toBe("error")
  })

  it('should return "map" for a Map object', () => {
    expect(toType(new Map())).toBe("map")
  })

  it('should return "set" for a Set object', () => {
    expect(toType(new Set())).toBe("set")
  })

  it('should return "weakmap" for a WeakMap object', () => {
    expect(toType(new WeakMap())).toBe("weakmap")
  })

  it('should return "weakset" for a WeakSet object', () => {
    expect(toType(new WeakSet())).toBe("weakset")
  })

  it('should return "promise" for a Promise object', () => {
    expect(toType(Promise.resolve())).toBe("promise")
  })

  it('should return "null" for a class instance', () => {
    class MyClass {}
    expect(toType(new MyClass())).toBe("object")
  })

  it('should return "int8array" for an Int8Array object', () => {
    expect(toType(new Int8Array())).toBe("int8array")
  })

  it('should return "uint8array" for a Uint8Array object', () => {
    expect(toType(new Uint8Array())).toBe("uint8array")
  })

  it('should return "uint8clampedarray" for a Uint8ClampedArray object', () => {
    expect(toType(new Uint8ClampedArray())).toBe("uint8clampedarray")
  })

  it('should return "int16array" for an Int16Array object', () => {
    expect(toType(new Int16Array())).toBe("int16array")
  })

  it('should return "uint16array" for a Uint16Array object', () => {
    expect(toType(new Uint16Array())).toBe("uint16array")
  })

  it('should return "int32array" for an Int32Array object', () => {
    expect(toType(new Int32Array())).toBe("int32array")
  })

  it('should return "uint32array" for a Uint32Array object', () => {
    expect(toType(new Uint32Array())).toBe("uint32array")
  })

  it('should return "float32array" for a Float32Array object', () => {
    expect(toType(new Float32Array())).toBe("float32array")
  })

  it('should return "float64array" for a Float64Array object', () => {
    expect(toType(new Float64Array())).toBe("float64array")
  })

  it('should return "arraybuffer" for an ArrayBuffer object', () => {
    expect(toType(new ArrayBuffer(8))).toBe("arraybuffer")
  })

  it('should return "dataview" for a DataView object', () => {
    expect(toType(new DataView(new ArrayBuffer(8)))).toBe("dataview")
  })

  it('should return "generator" for a generator function object', () => {
    function* gen() {}
    expect(toType(gen())).toBe("generator")
  })

  it("should return correct value for a Proxy", () => {
    const target = {}
    const proxy = new Proxy(target, {})
    expect(toType(proxy)).toBe("object") // Proxy object are object
    const array: [] = []
    const proxyArray = new Proxy(array, {})
    expect(toType(proxyArray)).toBe("array") // Proxy array are array
  })

  it('should return "reflect" for the Reflect object', () => {
    expect(toType(Reflect)).toBe("reflect")
  })

  it('should return "json" for a JSON object', () => {
    expect(toType(JSON)).toBe("json")
  })

  it('should return "math" for the Math object', () => {
    expect(toType(Math)).toBe("math")
  })
})
