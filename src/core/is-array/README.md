# Function `isArray`

Checks if a value is an array.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `boolean` | `True` if the value is an array, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isArray([1, 2, 3])) // true
console.log(isArray("Hello")) // false
console.log(isArray({})) // false
console.log(isArray(null)) // false
```
