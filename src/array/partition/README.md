# Function `partition`

Partitions an array into two separate arrays based on a given callback function. The first array contains elements for which the callback function returns `true`, and the second array contains elements for which the callback function returns `false`.

## Parameters

| Parameter  | Type                      | Description                                                                                                 |
| ---------- | ------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `array`    | `T[]`                     | The array to be partitioned.                                                                                |
| `callback` | `(element: T) => boolean` | The callback function used to determine whether an element should be included in the first or second array. |

## Returns

| Type         | Description                                                                                                                                                                                               |
| ------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `[T[], T[]]` | An array containing two arrays: the first array contains elements for which the callback function returns `true`, and the second array contains elements for which the callback function returns `false`. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
const numbers = [1, 2, 3, 4, 5, 6]
const [evens, odds] = partition(numbers, (n) => n % 2 === 0)
console.log(evens) // [2, 4, 6]
console.log(odds) // [1, 3, 5]
```
