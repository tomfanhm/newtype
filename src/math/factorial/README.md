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
console.log(factorial(5)) // 120
console.log(factorial(0)) // 1
console.log(factorial(1)) // 1
```
