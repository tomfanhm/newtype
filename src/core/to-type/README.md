# Function `toType`

Converts a value to its type as a string.

## Parameters

| Parameter | Type      | Description           |
| --------- | --------- | --------------------- |
| `value`   | `unknown` | The value to convert. |

## Returns

| Type     | Description                        |
| -------- | ---------------------------------- |
| `string` | The type of the value as a string. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(toType("Hello")) // "string"
console.log(toType(123)) // "number"
console.log(toType(true)) // "boolean"
console.log(toType([])) // "array"
console.log(toType({})) // "object"
console.log(toType(null)) // "null"
console.log(toType(undefined)) // "undefined"
console.log(toType(Symbol())) // "symbol"
console.log(toType(new Date())) // "date"
console.log(toType(() => {})) // "function"
```
