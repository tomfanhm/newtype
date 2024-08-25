# Function `permutations`

Generates all possible permutations of an array.

## Parameters

| Parameter | Type  | Description                              |
| --------- | ----- | ---------------------------------------- |
| `array`   | `T[]` | The array to generate permutations from. |

## Returns

| Type    | Description                                              |
| ------- | -------------------------------------------------------- |
| `T[][]` | An array of arrays containing all possible permutations. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
// Example with numbers
const numbers = [1, 2, 3]
const permutationsOfNumbers = permutations(numbers)
console.log(permutationsOfNumbers)
// [
//   [1, 2, 3],
//   [1, 3, 2],
//   [2, 1, 3],
//   [2, 3, 1],
//   [3, 1, 2],
//   [3, 2, 1]
// ]

// Example with strings
const strings = ["a", "b", "c"]
const permutationsOfStrings = permutations(strings)
console.log(permutationsOfStrings)
// [
//   ["a", "b", "c"],
//   ["a", "c", "b"],
//   ["b", "a", "c"],
//   ["b", "c", "a"],
//   ["c", "a", "b"],
//   ["c", "b", "a"]
// ]
```
