# Function `randomInt`

Generates a random integer between the specified minimum and maximum values, inclusive.

## Parameters

| Parameter | Type   | Description                    |
| --------- | ------ | ------------------------------ |
| min       | number | The minimum value (inclusive). |
| max       | number | The maximum value (inclusive). |

## Returns

| Type   | Description                                             |
| ------ | ------------------------------------------------------- |
| number | A random integer between the specified `min` and `max`. |

## Errors

| Type  | Description                                                    |
| ----- | -------------------------------------------------------------- |
| Error | Thrown if the minimum value is greater than the maximum value. |

## Examples

```typescript
console.log(randomInt(1, 10)) // e.g., 7
console.log(randomInt(-5, 5)) // e.g., -3
```
