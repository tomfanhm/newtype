# Function `isString`

Checks if a value is a string.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                                 |
| --------- | ----------------------------------------------------------- |
| `boolean` | Returns `true` if the value is a string, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isString("Hello, World!")) // true
console.log(isString(123)) // false
console.log(isString({})) // false
console.log(isString(null)) // false
```
