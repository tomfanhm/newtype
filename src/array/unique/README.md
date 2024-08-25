# Function `unique`

Removes duplicate elements from an array.

## Parameters

| Parameter | Type  | Description                          |
| --------- | ----- | ------------------------------------ |
| `array`   | `T[]` | The array to remove duplicates from. |

## Returns

| Type  | Description                                  |
| ----- | -------------------------------------------- |
| `T[]` | A new array with duplicate elements removed. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
// Example with numbers
const numbers = [1, 2, 2, 3, 4, 4, 5]
const uniqueNumbers = unique(numbers)
console.log(uniqueNumbers) // [1, 2, 3, 4, 5]

// Example with strings
const strings = ["apple", "banana", "apple", "cherry"]
const uniqueStrings = unique(strings)
console.log(uniqueStrings) // ["apple", "banana", "cherry"]
```
