# Function `isDate`

Checks if a value is a valid `Date` object.

## Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

## Returns

| Type      | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| `boolean` | A boolean indicating whether the value is a valid `Date` object. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
const date = new Date()
console.log(isDate(date)) // true

const invalidDate = new Date("invalid date string")
console.log(isDate(invalidDate)) // false

console.log(isDate("2024-01-01")) // false
console.log(isDate(1672531199000)) // false
console.log(isDate(null)) // false
```
