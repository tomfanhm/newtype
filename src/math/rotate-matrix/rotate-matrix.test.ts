import { describe, it, expect } from "vitest"
import rotateMatrix from "./rotate-matrix"

describe("rotateMatrix function", () => {
  const matrix3x3 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]

  const matrix2x2 = [
    [1, 2],
    [3, 4],
  ]

  const matrix1x1 = [[1]]

  it("should rotate a 3x3 matrix 90 degrees clockwise", () => {
    const result = rotateMatrix(matrix3x3, 90)
    const expected = [
      [7, 4, 1],
      [8, 5, 2],
      [9, 6, 3],
    ]
    expect(result).toEqual(expected)
  })

  it("should rotate a 3x3 matrix 180 degrees clockwise", () => {
    const result = rotateMatrix(matrix3x3, 180)
    const expected = [
      [9, 8, 7],
      [6, 5, 4],
      [3, 2, 1],
    ]
    expect(result).toEqual(expected)
  })

  it("should rotate a 3x3 matrix 270 degrees clockwise", () => {
    const result = rotateMatrix(matrix3x3, 270)
    const expected = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ]
    expect(result).toEqual(expected)
  })

  it("should return the original 3x3 matrix when rotated 360 degrees clockwise", () => {
    const result = rotateMatrix(matrix3x3, 360)
    expect(result).toEqual(matrix3x3)
  })

  it("should rotate a 3x3 matrix 90 degrees counterclockwise", () => {
    const result = rotateMatrix(matrix3x3, 90, false)
    const expected = [
      [3, 6, 9],
      [2, 5, 8],
      [1, 4, 7],
    ]
    expect(result).toEqual(expected)
  })

  it("should rotate a 2x2 matrix 90 degrees clockwise", () => {
    const result = rotateMatrix(matrix2x2, 90)
    const expected = [
      [3, 1],
      [4, 2],
    ]
    expect(result).toEqual(expected)
  })

  it("should return the original 2x2 matrix when rotated 360 degrees", () => {
    const result = rotateMatrix(matrix2x2, 360)
    expect(result).toEqual(matrix2x2)
  })

  it("should handle a 1x1 matrix (trivial case) for any rotation", () => {
    const result90 = rotateMatrix(matrix1x1, 90)
    const result180 = rotateMatrix(matrix1x1, 180)
    const result270 = rotateMatrix(matrix1x1, 270)
    const result360 = rotateMatrix(matrix1x1, 360)

    expect(result90).toEqual(matrix1x1)
    expect(result180).toEqual(matrix1x1)
    expect(result270).toEqual(matrix1x1)
    expect(result360).toEqual(matrix1x1)
  })

  it("should throw an error for an invalid rotation degree", () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    expect(() => rotateMatrix(matrix3x3, 45 as any)).toThrowError(
      "Invalid rotation degree. Must be one of 90, 180, 270, 360."
    )
  })

  it("should handle m x n matrix", () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ]
    const result90 = rotateMatrix(matrix, 90)
    const result180 = rotateMatrix(matrix, 180)
    const result270 = rotateMatrix(matrix, 270)
    const result360 = rotateMatrix(matrix, 360)

    expect(result90).toEqual([
      [4, 1],
      [5, 2],
      [6, 3],
    ])
    expect(result180).toEqual([
      [6, 5, 4],
      [3, 2, 1],
    ])
    expect(result270).toEqual([
      [3, 6],
      [2, 5],
      [1, 4],
    ])
    expect(result360).toEqual(matrix)
  })

  it("should handle empty matrix", () => {
    expect(rotateMatrix([], 90)).toEqual([])
  })
})
