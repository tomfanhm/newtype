# Function `dateCalculator`

A utility function that performs date calculations, allowing the addition or subtraction of days, months, and years from a given date.

## Parameters

| Parameter | Type   | Description     |
| --------- | ------ | --------------- |
| `d`       | `Date` | The input date. |

## Returns

| Type     | Description                                                                            |
| -------- | -------------------------------------------------------------------------------------- |
| `object` | An object with methods to add or subtract days, months, and years from the input date. |

## Methods

### `addDay`

Adds the specified number of days to the current date.

#### Parameters

| Parameter | Type     | Description                |
| --------- | -------- | -------------------------- |
| `days`    | `number` | The number of days to add. |

#### Returns

| Type   | Description                                             |
| ------ | ------------------------------------------------------- |
| `Date` | The new date after adding the specified number of days. |

### `subtractDay`

Subtracts the specified number of days from the current date.

#### Parameters

| Parameter | Type     | Description                     |
| --------- | -------- | ------------------------------- |
| `days`    | `number` | The number of days to subtract. |

#### Returns

| Type   | Description                                                  |
| ------ | ------------------------------------------------------------ |
| `Date` | The new date after subtracting the specified number of days. |

### `addMonth`

Adds the specified number of months to the current date.

#### Parameters

| Parameter | Type     | Description                  |
| --------- | -------- | ---------------------------- |
| `months`  | `number` | The number of months to add. |

#### Returns

| Type   | Description                                               |
| ------ | --------------------------------------------------------- |
| `Date` | The new date after adding the specified number of months. |

### `subtractMonth`

Subtracts the specified number of months from the current date.

#### Parameters

| Parameter | Type     | Description                       |
| --------- | -------- | --------------------------------- |
| `months`  | `number` | The number of months to subtract. |

#### Returns

| Type   | Description                                                    |
| ------ | -------------------------------------------------------------- |
| `Date` | The new date after subtracting the specified number of months. |

### `addYear`

Adds the specified number of years to the current date.

#### Parameters

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| `years`   | `number` | The number of years to add. |

#### Returns

| Type   | Description                                              |
| ------ | -------------------------------------------------------- |
| `Date` | The new date after adding the specified number of years. |

### `subtractYear`

Subtracts the specified number of years from the current date.

#### Parameters

| Parameter | Type     | Description                      |
| --------- | -------- | -------------------------------- |
| `years`   | `number` | The number of years to subtract. |

#### Returns

| Type   | Description                                                   |
| ------ | ------------------------------------------------------------- |
| `Date` | The new date after subtracting the specified number of years. |

## Errors

| Type    | Description                            |
| ------- | -------------------------------------- |
| `Error` | Thrown if an invalid date is provided. |

## Examples

```typescript
const date = new Date("2024-01-01")
const calculator = dateCalculator(date)

// Add 10 days
console.log(calculator.addDay(10)) // 2024-01-11

// Subtract 5 days
console.log(calculator.subtractDay(5)) // 2024-01-06

// Add 2 months
console.log(calculator.addMonth(2)) // 2024-03-06

// Subtract 1 year
console.log(calculator.subtractYear(1)) // 2023-03-06
```
