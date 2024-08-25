# Function `factorial`

Calculates the factorial of a non-negative integer.

## Parameters

| Parameter | Type     | Description                                      |
| --------- | -------- | ------------------------------------------------ |
| `n`       | `number` | The number for which to calculate the factorial. |

## Returns

| Type     | Description                        |
| -------- | ---------------------------------- |
| `number` | The factorial of the given number. |

## Errors

| Type    | Description                             |
| ------- | --------------------------------------- |
| `Error` | Thrown if the number is negative.       |
| `Error` | Thrown if the number is not an integer. |

## Examples

```typescript
const result1 = factorial(5)
console.log(result1) // 120

const result2 = factorial(0)
console.log(result2) // 1

const result3 = factorial(1)
console.log(result3) // 1
```
