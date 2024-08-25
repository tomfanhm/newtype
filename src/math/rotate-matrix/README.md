# Function `rotateMatrix`

Rotates a matrix by the specified degrees.

## Parameters

| Parameter   | Type                      | Description                                                                       |
| ----------- | ------------------------- | --------------------------------------------------------------------------------- |
| `matrix`    | `number[][]`              | The matrix to rotate.                                                             |
| `degrees`   | `90 \| 180 \| 270 \| 360` | The degrees to rotate the matrix by. Must be one of `90`, `180`, `270`, or `360`. |
| `clockwise` | `boolean`                 | Specifies whether to rotate the matrix clockwise. Default is `true`.              |

## Returns

| Type         | Description         |
| ------------ | ------------------- |
| `number[][]` | The rotated matrix. |

## Errors

| Type    | Description                                                                              |
| ------- | ---------------------------------------------------------------------------------------- |
| `Error` | Thrown if an invalid rotation degree is provided (not one of `90`, `180`, `270`, `360`). |

## Examples

```typescript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]

// Rotate 90 degrees clockwise
const rotated90 = rotateMatrix(matrix, 90)
console.log(rotated90)
// [
//   [7, 4, 1],
//   [8, 5, 2],
//   [9, 6, 3]
// ]

// Rotate 180 degrees clockwise
const rotated180 = rotateMatrix(matrix, 180)
console.log(rotated180)
// [
//   [9, 8, 7],
//   [6, 5, 4],
//   [3, 2, 1]
// ]

// Rotate 90 degrees counterclockwise
const rotated90Counter = rotateMatrix(matrix, 90, false)
console.log(rotated90Counter)
// [
//   [3, 6, 9],
//   [2, 5, 8],
//   [1, 4, 7]
// ]
```
