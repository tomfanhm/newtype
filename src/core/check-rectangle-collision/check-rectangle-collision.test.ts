import { describe, expect, it } from "vitest"
import checkRectangleCollision from "./check-rectangle-collision"

describe("checkRectangleCollision function", () => {
  it("should return true when rectangles touch each other's edges", () => {
    const obj1 = { x: 0, y: 0, width: 10, height: 10 }
    const obj2 = { x: 10, y: 10, width: 10, height: 10 }
    const result = checkRectangleCollision(obj1, obj2)
    expect(result).toBe(true)
  })

  it("should return false when rectangles are near each other but not touching", () => {
    const obj1 = { x: 0, y: 0, width: 10, height: 10 }
    const obj2 = { x: 11, y: 11, width: 10, height: 10 }
    const result = checkRectangleCollision(obj1, obj2)
    expect(result).toBe(false)
  })

  it("should return true when one rectangle is completely inside another", () => {
    const obj1 = { x: 5, y: 5, width: 20, height: 20 }
    const obj2 = { x: 10, y: 10, width: 5, height: 5 }
    const result = checkRectangleCollision(obj1, obj2)
    expect(result).toBe(true)
  })

  it("should return false for non-overlapping rectangles aligned along the same x or y axis", () => {
    const obj1 = { x: 0, y: 0, width: 10, height: 5 }
    const obj2 = { x: 0, y: 6, width: 10, height: 5 }
    const result = checkRectangleCollision(obj1, obj2)
    expect(result).toBe(false)
  })

  it("should return true when rectangles overlap at the corner", () => {
    const obj1 = { x: 0, y: 0, width: 10, height: 10 }
    const obj2 = { x: 9, y: 9, width: 10, height: 10 }
    const result = checkRectangleCollision(obj1, obj2)
    expect(result).toBe(true)
  })
})
