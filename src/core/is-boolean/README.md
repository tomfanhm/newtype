# Function `isBoolean`

Checks if the given value is a boolean.

## Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

## Returns

| Type      | Description                                          |
| --------- | ---------------------------------------------------- |
| `boolean` | `true` if the value is a boolean, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isBoolean(true)) // true
console.log(isBoolean(false)) // true
console.log(isBoolean("true")) // false
console.log(isBoolean(1)) // false
console.log(isBoolean(null)) // false
```
