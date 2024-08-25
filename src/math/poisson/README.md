# Function `poisson`

Calculates the probability mass function of the Poisson distribution using the formula $$ \frac{e^{-\lambda} \cdot \lambda^k}{k!}$$

## Parameters

| Parameter | Type     | Description                                            |
| --------- | -------- | ------------------------------------------------------ |
| `lambda`  | `number` | The average rate of events occurring per unit of time. |
| `k`       | `number` | The number of events to calculate the probability for. |

## Returns

| Type     | Description                          |
| -------- | ------------------------------------ |
| `number` | The probability mass function value. |

## Errors

| Type    | Description                      |
| ------- | -------------------------------- |
| `Error` | Thrown if `lambda` is negative.  |
| `Error` | Thrown if `k` is negative.       |
| `Error` | Thrown if `k` is not an integer. |

## Examples

```typescript
// Example: Calculate the Poisson probability for lambda = 3 and k = 2
const probability = poisson(3, 1)
console.log(probability) // 0.14936120510359183
```
