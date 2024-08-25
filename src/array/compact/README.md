# Function `compact`

Removes `null` and `undefined` values from an array.

## Parameters

| Parameter | Type  | Description           |
| --------- | ----- | --------------------- |
| `arr`     | `T[]` | The array to compact. |

## Returns

| Type               | Description                                             |
| ------------------ | ------------------------------------------------------- |
| `NonNullable<T>[]` | A new array with `null` and `undefined` values removed. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
const array = [1, null, 2, undefined, 3, "", false, 4]
const compactedArray = compact(array)
console.log(compactedArray) // [1, 2, 3, 4]

const stringArray = ["a", "b", null, "d"]
const compactedStringArray = compact(stringArray)
console.log(compactedStringArray) // ["a", "b", "d"]
```
