import { describe, it, expect } from "vitest"
import buildUrl from "./build-url"

describe("buildUrl function", () => {
  it("should build a URL with a single query parameter", () => {
    const baseUrl = "https://example.com"
    const params = { foo: "bar" }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/?foo=bar")
  })

  it("should build a URL with multiple query parameters", () => {
    const baseUrl = "https://example.com"
    const params = { foo: "bar", baz: 42, qux: true }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/?foo=bar&baz=42&qux=true")
  })

  it("should handle boolean values correctly", () => {
    const baseUrl = "https://example.com"
    const params = { foo: false, bar: true }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/?foo=false&bar=true")
  })

  it("should handle numeric values correctly", () => {
    const baseUrl = "https://example.com"
    const params = { count: 123, float: 45.67 }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/?count=123&float=45.67")
  })

  it("should handle empty strings as parameter values", () => {
    const baseUrl = "https://example.com"
    const params = { foo: "" }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/?foo=")
  })

  it("should return the original URL if no parameters are provided", () => {
    const baseUrl = "https://example.com"
    const params = {}
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/")
  })

  it("should correctly append parameters to a URL that already has query parameters", () => {
    const baseUrl = "https://example.com?existing=param"
    const params = { foo: "bar" }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/?existing=param&foo=bar")
  })

  it("should encode special characters in query parameters", () => {
    const baseUrl = "https://example.com"
    const params = { "special chars": "a&b=c?d/e" }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/?special+chars=a%26b%3Dc%3Fd%2Fe")
  })

  it("should handle a base URL with a trailing slash correctly", () => {
    const baseUrl = "https://example.com/"
    const params = { foo: "bar" }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/?foo=bar")
  })

  it("should handle URLs with port numbers", () => {
    const baseUrl = "https://example.com:8080"
    const params = { foo: "bar" }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com:8080/?foo=bar")
  })

  it("should handle URLs with a path correctly", () => {
    const baseUrl = "https://example.com/api"
    const params = { search: "test", page: 2 }
    const result = buildUrl(baseUrl, params)
    expect(result).toBe("https://example.com/api?search=test&page=2")
  })
})
