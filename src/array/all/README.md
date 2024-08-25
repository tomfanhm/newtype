# Function `all`

Checks if all elements in the array evaluate to `true`.

## Parameters

| Parameter | Type  | Description         |
| --------- | ----- | ------------------- |
| `array`   | `T[]` | The array to check. |

## Returns

| Type      | Description                                                   |
| --------- | ------------------------------------------------------------- |
| `boolean` | `True` if all elements evaluate to `true`, `false` otherwise. |

## Examples

```typescript
// Example with all elements evaluating to true
const allTrue = all([1, true, "non-empty", 42])
console.log(allTrue) // true

// Example with some elements evaluating to false
const someFalse = all([1, true, "", 42])
console.log(someFalse) // false

// Example with an empty array (returns true because there are no false elements)
const emptyArray = all([])
console.log(emptyArray) // true
```
