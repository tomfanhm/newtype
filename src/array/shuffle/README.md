# Function `shuffle`

Shuffles an array using the Fisher-Yates (aka Knuth) shuffle algorithm.

## Parameters

| Parameter | Type               | Description               |
| --------- | ------------------ | ------------------------- |
| `array`   | `ReadonlyArray<T>` | The array to be shuffled. |

## Returns

| Type  | Description         |
| ----- | ------------------- |
| `T[]` | The shuffled array. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
// Example with numbers
const numbers = [1, 2, 3, 4, 5]
const shuffledNumbers = shuffle(numbers)
console.log(shuffledNumbers) // Example output: [3, 1, 4, 5, 2]

// Example with strings
const strings = ["apple", "banana", "cherry"]
const shuffledStrings = shuffle(strings)
console.log(shuffledStrings) // Example output: ["banana", "apple", "cherry"]

// Example with objects
const objects = [{ id: 1 }, { id: 2 }, { id: 3 }]
const shuffledObjects = shuffle(objects)
console.log(shuffledObjects) // Example output: [{ id: 3 }, { id: 1 }, { id: 2 }]
```
