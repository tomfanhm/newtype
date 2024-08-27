# Function `numberToRoman`

Converts a number to its Roman numeral representation.

## Parameters

| Parameter | Type     | Description            |
| --------- | -------- | ---------------------- |
| `num`     | `number` | The number to convert. |

## Returns

| Type     | Description                                           |
| -------- | ----------------------------------------------------- |
| `string` | The Roman numeral representation of the input number. |

## Errors

| Type    | Description                                                                                    |
| ------- | ---------------------------------------------------------------------------------------------- |
| `Error` | Thrown if the input is not a valid integer or if the number is outside the range of 1 to 3999. |

## Examples

```typescript
console.log(numberToRoman(1987)) // "MCMLXXXVII"
console.log(numberToRoman(3999)) // "MMMCMXCIX"
console.log(numberToRoman(4)) // "IV"
```
