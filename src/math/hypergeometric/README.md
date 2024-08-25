# Function `hypergeometric`

Calculates the hypergeometric distribution using the formula $$P(X = k) = \frac{\binom{K}{k} \times \binom{N-K}{n-k}}{\binom{N}{n}}$$

Where:

- \( N \) is the population size.
- \( K \) is the number of successes in the population.
- \( n \) is the sample size.
- \( k \) is the number of observed successes in the sample.

## Parameters

| Parameter | Type     | Description                                     |
| --------- | -------- | ----------------------------------------------- |
| `N`       | `number` | The population size.                            |
| `K`       | `number` | The number of successes in the population.      |
| `n`       | `number` | The sample size.                                |
| `k`       | `number` | The number of observed successes in the sample. |

## Returns

| Type     | Description                                                                                                                                     |
| -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| `number` | The probability of observing `k` successes in a sample of size `n`, drawn without replacement from a population of size `N` with `K` successes. |

## Errors

| Type    | Description                                                   |
| ------- | ------------------------------------------------------------- |
| `Error` | Thrown if any of the parameters are negative or not integers. |
| `Error` | Thrown if `K` is greater than `N`.                            |
| `Error` | Thrown if `n` is greater than `N`.                            |
| `Error` | Thrown if `k` is greater than the smaller of `K` or `n`.      |

## Examples

```typescript
const probability = hypergeometric(50, 5, 10, 1)
console.log(probability) // 0.4313371972285677
```
