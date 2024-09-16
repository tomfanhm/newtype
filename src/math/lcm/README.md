# Function `lcm`

Calculates the Least Common Multiple (LCM) of an array of numbers.

## Parameters

| Parameter | Type     | Description                                                       |
| --------- | -------- | ----------------------------------------------------------------- |
| arr       | number[] | An array of numbers. Must contain at least 2 elements and no `0`. |

## Returns

| Type   | Description                                                  |
| ------ | ------------------------------------------------------------ |
| number | The Least Common Multiple (LCM) of the numbers in the array. |

## Errors

| Type  | Description                                                    |
| ----- | -------------------------------------------------------------- |
| Error | Thrown if the array has fewer than 2 elements or contains `0`. |

## Examples

```typescript
console.log(lcm([12, 15])) // 60
console.log(lcm([4, 6, 8])) // 24
```
