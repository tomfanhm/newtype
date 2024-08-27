# Function `isNumber`

Checks if the given value is a number.

## Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

## Returns

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `boolean` | `true` if the value is a number, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isNumber(42)) // true
console.log(isNumber("42")) // false
console.log(isNumber(NaN)) // false
console.log(isNumber(Infinity)) // false
console.log(isNumber(null)) // false
```
