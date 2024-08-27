# Function `sample`

Returns a sample of elements from an array.

## Parameters

| Parameter | Type     | Description                                        |
| --------- | -------- | -------------------------------------------------- |
| `array`   | `T[]`    | The array to sample from.                          |
| `count`   | `number` | The number of elements to sample. Defaults to `1`. |

## Returns

| Type  | Description                               |
| ----- | ----------------------------------------- |
| `T[]` | An array containing the sampled elements. |

## Errors

| Type    | Description                                   |
| ------- | --------------------------------------------- |
| `Error` | Thrown if `count` is less than or equal to 0. |
| `Error` | Thrown if `count` is not an integer.          |

## Examples

```typescript
// Example with a simple array
const array = [1, 2, 3, 4, 5]

// Sample 2 elements from the array
const sampled = sample(array, 2)
console.log(sampled) // Example output: [3, 5]

// Sample 1 element (default)
const singleSample = sample(array)
console.log(singleSample) // Example output: [2]
```
