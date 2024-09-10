# Function `any`

Checks if any element in the array is truthy.

## Parameters

| Parameter | Type               | Description         |
| --------- | ------------------ | ------------------- |
| array     | `ReadonlyArray<T>` | The array to check. |

## Returns

| Type      | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `boolean` | `True` if any element in the array is truthy, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
// Example with at least one truthy element
const hasTruthy = any([0, false, "", 42])
console.log(hasTruthy) // true

// Example with all falsy elements
const allFalsy = any([0, false, "", null])
console.log(allFalsy) // false

// Example with an empty array (returns false because there are no truthy elements)
const emptyArray = any([])
console.log(emptyArray) // false
```
