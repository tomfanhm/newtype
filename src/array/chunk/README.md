# Function `chunk`

Splits an array into chunks of a specified size.

## Parameters

| Parameter   | Type               | Description              |
| ----------- | ------------------ | ------------------------ |
| `array`     | `ReadonlyArray<T>` | The array to be chunked. |
| `chunkSize` | `number`           | The size of each chunk.  |

## Returns

| Type    | Description         |
| ------- | ------------------- |
| `T[][]` | An array of chunks. |

## Errors

| Type    | Description                                             |
| ------- | ------------------------------------------------------- |
| `Error` | Thrown if the chunk size is less than or equal to zero. |
| `Error` | Thrown if the chunk size is not an integer.             |

## Examples

```typescript
// Example with an array of numbers
const numbers = [1, 2, 3, 4, 5, 6, 7, 8]
const chunks = chunk(numbers, 3)
console.log(chunks) // [[1, 2, 3], [4, 5, 6], [7, 8]]

// Example with an array of strings
const strings = ["a", "b", "c", "d", "e"]
const stringChunks = chunk(strings, 2)
console.log(stringChunks) // [["a", "b"], ["c", "d"], ["e"]]
```
