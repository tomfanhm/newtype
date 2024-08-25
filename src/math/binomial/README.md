# Function `binomial`

Calculates the binomial coefficient using the formula $$nCk \times p^k \times (1 - p)^{n - k}$$

## Parameters

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| `n`       | `number` | The total number of trials.               |
| `k`       | `number` | The number of successful trials.          |
| `p`       | `number` | The probability of success in each trial. |

## Returns

| Type     | Description                          |
| -------- | ------------------------------------ |
| `number` | The calculated binomial coefficient. |

## Errors

| Type    | Description                                                      |
| ------- | ---------------------------------------------------------------- |
| `Error` | Thrown if `n` or `k` are invalid, e.g., `k` is greater than `n`. |
| `Error` | Thrown if `p` is not between 0 and 1.                            |

## Examples

```typescript
// Example with 5 trials, 2 successes, and 0.5 probability of success
const result = binomial(5, 2, 0.5)
console.log(result) // 0.3125
```
