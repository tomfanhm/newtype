# Function `quickSort`

Sorts an array using the quicksort algorithm.

## Parameters

| Parameter | Type                     | Description                                                                                                                                                                                                    |
| --------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `array`   | `ReadonlyArray<T>`       | The array to be sorted.                                                                                                                                                                                        |
| `compare` | `(a: T, b: T) => number` | A function that defines the order of the elements. It should return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b`, and `0` if `a` and `b` are equal. |

## Returns

| Type  | Description       |
| ----- | ----------------- |
| `T[]` | The sorted array. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
// Example with numbers in ascending order
const numbers = [3, 6, 8, 10, 1, 2, 1]
const sortedNumbers = quickSort(numbers, (a, b) => a - b)
console.log(sortedNumbers) // [1, 1, 2, 3, 6, 8, 10]

// Example with strings in alphabetical order
const strings = ["pear", "apple", "orange", "banana"]
const sortedStrings = quickSort(strings, (a, b) => a.localeCompare(b))
console.log(sortedStrings) // ["apple", "banana", "orange", "pear"]

// Example with objects
const objects = [{ id: 3 }, { id: 1 }, { id: 2 }]
const sortedObjects = quickSort(objects, (a, b) => a.id - b.id)
console.log(sortedObjects) // [{ id: 1 }, { id: 2 }, { id: 3 }]
```
