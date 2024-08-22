/**
 * Rotates a matrix by the specified degrees.
 * @param matrix - The matrix to rotate.
 * @param degrees - The degrees to rotate the matrix by. Must be one of 90, 180, 270, 360.
 * @param clockwise - Specifies whether to rotate the matrix clockwise (default: true).
 * @returns The rotated matrix.
 * @throws Error if an invalid rotation degree is provided.
 */
export default function rotateMatrix(
  matrix: number[][],
  degrees: 90 | 180 | 270 | 360,
  clockwise: boolean = true
): number[][] {
  if (![90, 180, 270, 360].includes(degrees)) {
    throw new Error("Invalid rotation degree. Must be one of 90, 180, 270, 360.")
  }
  if (matrix.length === 0) return matrix
  if (!clockwise) degrees = 360 - degrees
  let rotated = matrix.map((row) => [...row]) // Deep clone the matrix
  const numRotations = (degrees / 90) % 4

  for (let r = 0; r < numRotations; r++) {
    rotated = rotate(rotated)
  }

  return rotated
}

function rotate(matrix: number[][]): number[][] {
  const m = matrix.length
  const n = matrix[0].length
  let rotated = Array.from({ length: n }, () => new Array(m).fill(0))

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      rotated[j][m - 1 - i] = matrix[i][j]
    }
  }

  return rotated
}
