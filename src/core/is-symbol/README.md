# Function `isSymbol`

Checks if a value is a symbol.

## Parameters

| Parameter | Type      | Description         |
| --------- | --------- | ------------------- |
| `value`   | `unknown` | The value to check. |

## Returns

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `boolean` | `true` if the value is a symbol, `false` otherwise. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
console.log(isSymbol(Symbol("example"))) // true
console.log(isSymbol("example")) // false
console.log(isSymbol(123)) // false
console.log(isSymbol(null)) // false
```
