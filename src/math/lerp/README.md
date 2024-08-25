# Function `lerp`

Performs linear interpolation between two values.

## Parameters

| Parameter | Type     | Description                               |
| --------- | -------- | ----------------------------------------- |
| `a`       | `number` | The start value.                          |
| `b`       | `number` | The end value.                            |
| `t`       | `number` | The interpolation factor between 0 and 1. |

## Returns

| Type     | Description             |
| -------- | ----------------------- |
| `number` | The interpolated value. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
// Interpolate halfway between 10 and 20
const halfway = lerp(10, 20, 0.5)
console.log(halfway) // 15

// Interpolate at the start (t = 0)
const startValue = lerp(10, 20, 0)
console.log(startValue) // 10

// Interpolate at the end (t = 1)
const endValue = lerp(10, 20, 1)
console.log(endValue) // 20
```
