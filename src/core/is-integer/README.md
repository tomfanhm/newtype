# Function `isInteger`

Checks if a value is an integer.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                           |
| --------- | ----------------------------------------------------- |
| `boolean` | `True` if the value is an integer, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isInteger(42)) // true
console.log(isInteger(3.14)) // false
console.log(isInteger("42")) // false
console.log(isInteger(null)) // false
```
