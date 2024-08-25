# Function `createCounter`

Creates a counter object with `increment`, `value`, and `reset` functions.

## Returns

| Type     | Description                                                                          |
| -------- | ------------------------------------------------------------------------------------ |
| `object` | An object with `increment`, `value`, and `reset` functions for managing the counter. |

## Methods

### `increment`

Increments the counter by 1 and returns the updated count.

#### Returns

| Type     | Description                           |
| -------- | ------------------------------------- |
| `number` | The updated count after incrementing. |

### `value`

Returns the current value of the counter.

#### Returns

| Type     | Description                       |
| -------- | --------------------------------- |
| `number` | The current value of the counter. |

### `reset`

Resets the counter to 0 and returns the updated count.

#### Returns

| Type     | Description                        |
| -------- | ---------------------------------- |
| `number` | The updated count after resetting. |

## Errors

This function does not throw any explicit errors.

## Examples

```typescript
const counter = createCounter()

// Increment the counter
console.log(counter.increment()) // 1
console.log(counter.increment()) // 2

// Get the current value
console.log(counter.value()) // 2

// Reset the counter
console.log(counter.reset()) // 0

// Check the value after resetting
console.log(counter.value()) // 0
```
