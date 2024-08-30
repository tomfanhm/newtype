import { describe, expect, it } from "vitest"
import parseUrl from "./parse-url"

describe("parseUrl function", () => {
  it("should parse a simple URL with no path, search, or hash", () => {
    const url = "https://example.com"
    const result = parseUrl(url)
    expect(result).toEqual({
      href: "https://example.com/",
      protocol: "https:",
      host: "example.com",
      hostname: "example.com",
      port: "",
      pathname: "/",
      search: "",
      searchParams: [],
      hash: "",
      origin: "https://example.com",
    })
  })

  it("should parse a URL with a path", () => {
    const url = "https://example.com/path/to/resource"
    const result = parseUrl(url)
    expect(result).toEqual({
      href: "https://example.com/path/to/resource",
      protocol: "https:",
      host: "example.com",
      hostname: "example.com",
      port: "",
      pathname: "/path/to/resource",
      search: "",
      searchParams: [],
      hash: "",
      origin: "https://example.com",
    })
  })

  it("should parse a URL with query parameters", () => {
    const url = "https://example.com/path?name=value&key=anotherValue"
    const result = parseUrl(url)
    expect(result).toEqual({
      href: "https://example.com/path?name=value&key=anotherValue",
      protocol: "https:",
      host: "example.com",
      hostname: "example.com",
      port: "",
      pathname: "/path",
      search: "?name=value&key=anotherValue",
      searchParams: [
        ["name", "value"],
        ["key", "anotherValue"],
      ],
      hash: "",
      origin: "https://example.com",
    })
  })

  it("should parse a URL with a hash", () => {
    const url = "https://example.com/path#section"
    const result = parseUrl(url)
    expect(result).toEqual({
      href: "https://example.com/path#section",
      protocol: "https:",
      host: "example.com",
      hostname: "example.com",
      port: "",
      pathname: "/path",
      search: "",
      searchParams: [],
      hash: "#section",
      origin: "https://example.com",
    })
  })

  it("should parse a URL with a port number", () => {
    const url = "https://example.com:8080/path"
    const result = parseUrl(url)
    expect(result).toEqual({
      href: "https://example.com:8080/path",
      protocol: "https:",
      host: "example.com:8080",
      hostname: "example.com",
      port: "8080",
      pathname: "/path",
      search: "",
      searchParams: [],
      hash: "",
      origin: "https://example.com:8080",
    })
  })

  it("should parse a URL with all components", () => {
    const url = "https://user:pass@example.com:8080/path?name=value#section"
    const result = parseUrl(url)
    expect(result).toEqual({
      href: "https://user:pass@example.com:8080/path?name=value#section",
      protocol: "https:",
      host: "example.com:8080",
      hostname: "example.com",
      port: "8080",
      pathname: "/path",
      search: "?name=value",
      searchParams: [["name", "value"]],
      hash: "#section",
      origin: "https://example.com:8080",
    })
  })

  it("should parse a URL with an IPv4 address", () => {
    const url = "http://192.168.0.1:3000/"
    const result = parseUrl(url)
    expect(result).toEqual({
      href: "http://192.168.0.1:3000/",
      protocol: "http:",
      host: "192.168.0.1:3000",
      hostname: "192.168.0.1",
      port: "3000",
      pathname: "/",
      search: "",
      searchParams: [],
      hash: "",
      origin: "http://192.168.0.1:3000",
    })
  })

  it("should parse a URL with an IPv6 address", () => {
    const url = "http://[2001:db8::1]:8080/path"
    const result = parseUrl(url)
    expect(result).toEqual({
      href: "http://[2001:db8::1]:8080/path",
      protocol: "http:",
      host: "[2001:db8::1]:8080",
      hostname: "[2001:db8::1]",
      port: "8080",
      pathname: "/path",
      search: "",
      searchParams: [],
      hash: "",
      origin: "http://[2001:db8::1]:8080",
    })
  })

  it("should throw an error for an invalid URL", () => {
    const url = "not a valid url"
    expect(() => parseUrl(url)).toThrow(TypeError)
  })

  it("should throw an error for an empty string", () => {
    const url = ""
    expect(() => parseUrl(url)).toThrow(TypeError)
  })

  it("should parse a file URL", () => {
    const url = "file:///C:/path/to/file.txt"
    const result = parseUrl(url)
    expect(result).toEqual({
      href: "file:///C:/path/to/file.txt",
      protocol: "file:",
      host: "",
      hostname: "",
      port: "",
      pathname: "/C:/path/to/file.txt",
      search: "",
      searchParams: [],
      hash: "",
      origin: "null",
    })
  })
})
