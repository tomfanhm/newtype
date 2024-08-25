# Type Guard

A collection of utility functions to check the type of a given value.

## Functions

### `isString`

Checks if a value is a string.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `boolean` | `true` if the value is a string, `false` otherwise. |

### `isNumber`

Checks if the given value is a number.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `boolean` | `true` if the value is a number, `false` otherwise. |

### `isBigInt`

Checks if the given value is a BigInt.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `boolean` | `true` if the value is a BigInt, `false` otherwise. |

### `isBoolean`

Checks if the given value is a boolean.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                          |
| --------- | ---------------------------------------------------- |
| `boolean` | `true` if the value is a boolean, `false` otherwise. |

### `isUndefined`

Checks if a value is undefined.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                          |
| --------- | ---------------------------------------------------- |
| `boolean` | `true` if the value is undefined, `false` otherwise. |

### `isNull`

Checks if a value is null.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                     |
| --------- | ----------------------------------------------- |
| `boolean` | `true` if the value is null, `false` otherwise. |

### `isSymbol`

Checks if a value is a symbol.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `boolean` | `true` if the value is a symbol, `false` otherwise. |

### `isObject`

Checks if a value is an object.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                          |
| --------- | ---------------------------------------------------- |
| `boolean` | `true` if the value is an object, `false` otherwise. |

### `isArray`

Checks if a value is an array.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                         |
| --------- | --------------------------------------------------- |
| `boolean` | `true` if the value is an array, `false` otherwise. |

### `isFunction`

Checks if a value is a function.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                           |
| --------- | ----------------------------------------------------- |
| `boolean` | `true` if the value is a function, `false` otherwise. |

### `isInteger`

Checks if a value is an integer.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                           |
| --------- | ----------------------------------------------------- |
| `boolean` | `true` if the value is an integer, `false` otherwise. |

### `isFloat`

Checks if a value is a floating-point number.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| `boolean` | `true` if the value is a floating-point number, `false` otherwise. |

### `isDate`

Checks if a value is a valid Date object.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                              |
| --------- | -------------------------------------------------------- |
| `boolean` | `true` if the value is a Date object, `false` otherwise. |

### `isError`

Checks if a value is an instance of `Error`.

#### Parameters

| Parameter | Type      | Description              |
| --------- | --------- | ------------------------ |
| `value`   | `unknown` | The value to be checked. |

#### Returns

| Type      | Description                                           |
| --------- | ----------------------------------------------------- |
| `boolean` | `true` if the value is an `Error`, `false` otherwise. |

## Examples

```typescript
// Example: Checking different types
console.log(isString("hello")) // true
console.log(isNumber(42)) // true
console.log(isBigInt(123n)) // true
console.log(isBoolean(false)) // true
console.log(isUndefined(undefined)) // true
console.log(isNull(null)) // true
console.log(isSymbol(Symbol("id"))) // true
console.log(isObject({})) // true
console.log(isArray([1, 2, 3])) // true
console.log(isFunction(() => {})) // true
console.log(isInteger(42)) // true
console.log(isFloat(3.14)) // true
console.log(isDate(new Date())) // true
console.log(isError(new Error("Oops"))) // true
```
