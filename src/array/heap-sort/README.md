# Function `heapSort`

Sorts an array using the Heap Sort algorithm.

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
const numbers = [4, 10, 3, 5, 1]
const sortedNumbers = heapSort(numbers, (a, b) => a - b)
console.log(sortedNumbers) // [1, 3, 4, 5, 10]

// Example with strings in descending order
const strings = ["apple", "orange", "banana", "pear"]
const sortedStrings = heapSort(strings, (a, b) => b.localeCompare(a))
console.log(sortedStrings) // ["pear", "orange", "banana", "apple"]

// Example with objects
const objects = [{ id: 3 }, { id: 1 }, { id: 2 }]
const sortedObjects = heapSort(objects, (a, b) => a.id - b.id)
console.log(sortedObjects) // [{ id: 1 }, { id: 2 }, { id: 3 }]
```
