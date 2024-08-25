# Function `variance`

Calculates the variance of an array of numbers.

## Parameters

| Parameter  | Type       | Description                                                                   |
| ---------- | ---------- | ----------------------------------------------------------------------------- |
| `numbers`  | `number[]` | The array of numbers to calculate the variance for.                           |
| `isSample` | `boolean`  | Optional. Specifies whether the array represents a sample. Default is `true`. |

## Returns

| Type     | Description                           |
| -------- | ------------------------------------- |
| `number` | The variance of the array of numbers. |

## Errors

| Type    | Description                                                             |
| ------- | ----------------------------------------------------------------------- |
| `Error` | Thrown if the array is empty.                                           |
| `Error` | Thrown if `isSample` is `true` and the array contains only one element. |

## Examples

```typescript
const data = [10, 20, 30, 40, 50]

// Sample variance (isSample = true)
const sampleVariance = variance(data)
console.log(sampleVariance) // 250

// Population variance (isSample = false)
const populationVariance = variance(data, false)
console.log(populationVariance) // 200
```
