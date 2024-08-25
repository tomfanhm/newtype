# Function `intersection`

Returns an array containing the intersection of two arrays.

## Parameters

| Parameter | Type  | Description       |
| --------- | ----- | ----------------- |
| `array1`  | `T[]` | The first array.  |
| `array2`  | `T[]` | The second array. |

## Returns

| Type  | Description                                              |
| ----- | -------------------------------------------------------- |
| `T[]` | An array containing the elements present in both arrays. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
// Example with numbers
const array1 = [1, 2, 3, 4]
const array2 = [3, 4, 5, 6]
const result = intersection(array1, array2)
console.log(result) // [3, 4]

// Example with strings
const strings1 = ["apple", "banana", "cherry"]
const strings2 = ["banana", "cherry", "date"]
const resultStrings = intersection(strings1, strings2)
console.log(resultStrings) // ["banana", "cherry"]
```
