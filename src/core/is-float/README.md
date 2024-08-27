# Function `isFloat`

Checks if a value is a floating-point number.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `boolean` | `true` if the value is a floating-point number, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isFloat(3.14)) // true
console.log(isFloat(42)) // false
console.log(isFloat("3.14")) // false
console.log(isFloat(null)) // false
```
