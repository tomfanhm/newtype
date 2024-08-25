# Function `std`

Calculates the standard deviation of an array of numbers.

## Parameters

| Parameter  | Type       | Description                                                                                            |
| ---------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| `numbers`  | `number[]` | The array of numbers to calculate the standard deviation for.                                          |
| `isSample` | `boolean`  | Optional. Specifies whether the array represents a sample or the entire population. Default is `true`. |

## Returns

| Type     | Description                            |
| -------- | -------------------------------------- |
| `number` | The standard deviation of the numbers. |

## Errors

| Type    | Description                                                             |
| ------- | ----------------------------------------------------------------------- |
| `Error` | Thrown if the array is empty.                                           |
| `Error` | Thrown if `isSample` is `true` and the array contains only one element. |

## Examples

```typescript
const data = [10, 20, 30, 40, 50]

// Sample standard deviation (isSample = true)
const sampleStd = std(data)
console.log(sampleStd) // 15.811388300841896

// Population standard deviation (isSample = false)
const populationStd = std(data, false)
console.log(populationStd) // 14.142135623730951
```
