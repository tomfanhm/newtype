# Function `bubbleSort`

Sorts an array using the bubble sort algorithm.

## Parameters

| Parameter | Type                     | Description                                                                                                                                                                                                    |
| --------- | ------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `arr`     | `T[]`                    | The array to be sorted.                                                                                                                                                                                        |
| `compare` | `(a: T, b: T) => number` | A function that defines the order of the elements. It should return a negative value if `a` should be sorted before `b`, a positive value if `a` should be sorted after `b`, and `0` if `a` and `b` are equal. |

## Returns

| Type  | Description       |
| ----- | ----------------- |
| `T[]` | The sorted array. |

## Examples

```typescript
// Example with numbers in ascending order
const numbers = [5, 3, 8, 4, 2]
const sortedNumbers = bubbleSort(numbers, (a, b) => a - b)
console.log(sortedNumbers) // [2, 3, 4, 5, 8]

// Example with strings in descending order
const strings = ["apple", "orange", "banana", "pear"]
const sortedStrings = bubbleSort(strings, (a, b) => b.localeCompare(a))
console.log(sortedStrings) // ["pear", "orange", "banana", "apple"]

// Example with objects
const objects = [{ id: 3 }, { id: 1 }, { id: 2 }]
const sortedObjects = bubbleSort(objects, (a, b) => a.id - b.id)
console.log(sortedObjects) // [{ id: 1 }, { id: 2 }, { id: 3 }]
```
