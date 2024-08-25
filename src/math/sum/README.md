# Function `sum`

Calculates the sum of an array of numbers.

## Parameters

| Parameter | Type       | Description                       |
| --------- | ---------- | --------------------------------- |
| `numbers` | `number[]` | An array of numbers to be summed. |

## Returns

| Type     | Description             |
| -------- | ----------------------- |
| `number` | The sum of the numbers. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
const data = [1, 2, 3, 4, 5]
const totalSum = sum(data)
console.log(totalSum) // 15

const emptyArray: number[] = []
const emptySum = sum(emptyArray)
console.log(emptySum) // 0
```
