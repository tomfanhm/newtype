import { describe, it, expect } from "vitest"
import isUUID from "./is-uuid"
import { v1 as uuidv1, v3 as uuidv3, v4 as uuidv4, v5 as uuidv5 } from "uuid"

describe("isUUID function", () => {
  it("should return true for valid UUIDs", () => {
    const v1 = uuidv1()
    expect(isUUID(v1)).toBe(true)
    const v3 = uuidv3("hello", uuidv3.DNS)
    expect(isUUID(v3)).toBe(true)
    const v4 = uuidv4()
    expect(isUUID(v4)).toBe(true)
    const v5 = uuidv5("hello", uuidv5.DNS)
    expect(isUUID(v5)).toBe(true)
  })

  it("should return false for strings that are not valid UUIDs", () => {
    const invalidUuid = "invalid-uuid-string"
    expect(isUUID(invalidUuid)).toBe(false)
  })

  it("should return false for an empty string", () => {
    expect(isUUID("")).toBe(false)
  })

  it("should return false for random non-UUID strings", () => {
    expect(isUUID("1234567890")).toBe(false)
    expect(isUUID("not-a-uuid")).toBe(false)
    expect(isUUID("550e8400-e29b-41d4-a716-4466554400000")).toBe(false)
  })
})
