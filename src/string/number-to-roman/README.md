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
const result1 = numberToRoman(1987)
console.log(result1) // "MCMLXXXVII"

const result2 = numberToRoman(3999)
console.log(result2) // "MMMCMXCIX"

const result3 = numberToRoman(4)
console.log(result3) // "IV"
```
