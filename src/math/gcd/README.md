# Function `gcd`

Calculates the greatest common divisor (GCD) of an array of numbers.

## Parameters

| Parameter | Type       | Description           |
| --------- | ---------- | --------------------- |
| `arr`     | `number[]` | The array of numbers. |

## Returns

| Type     | Description                                              |
| -------- | -------------------------------------------------------- |
| `number` | The greatest common divisor of the numbers in the array. |

## Errors

| Type    | Description                                    |
| ------- | ---------------------------------------------- |
| `Error` | Thrown if the array has fewer than 2 elements. |
| `Error` | Throw if the array contains 0.                 |

## Examples

```typescript
const numbers = [60, 48, 36]
const result = gcd(numbers)
console.log(result) // 12
```
