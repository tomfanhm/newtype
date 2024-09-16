# Function `clamp`

Clamps a number between a minimum and maximum value.

## Parameters

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| value     | number | The number to clamp.           |
| min       | number | The minimum value to clamp to. |
| max       | number | The maximum value to clamp to. |

## Returns

| Type   | Description        |
| ------ | ------------------ |
| number | The clamped value. |

## Errors

| Type  | Description                                                    |
| ----- | -------------------------------------------------------------- |
| Error | Thrown if the minimum value is greater than the maximum value. |

## Examples

```ts
// Clamp a value within a range
console.log(clamp(5, 1, 10)) // 5
console.log(clamp(15, 1, 10)) // 10
console.log(clamp(-5, 1, 10)) // 1
```
