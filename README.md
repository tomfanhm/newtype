# newtype

**newtype** is a comprehensive TypeScript library designed to streamline common programming tasks. This library offers a rich set of utilities spread across multiple domains such as arrays, strings, mathematics, dates, and system operations.

## Installation

Install **newtype** using npm:

```bash
npm install newtype
```

Or using yarn:

```bash
yarn add newtype
```

Or using pnpm:

```bash
pnpm add newtype
```

## Usage

After installing **newtype**, you can import and use various utilities from the library in your TypeScript or JavaScript projects. Here's how you can include these utilities:

```javascript
// Importing specific functions directly from the main module (Larger size)
import { bubbleSort, unique } from "newtype"
// Importing specific functions from the 'array' module using ES Modules
import { bubbleSort, unique } from "newtype/array"
// Importing specific functions from the 'array' module using CommonJS
const { bubbleSort, unique } = require("newtype/array")
```

## Modules

Explore detailed documentation for each module:

### Array

- [all](src/array/all/README.md)
- [any](src/array/any/README.md)
- [bubbleSort](src/array/bubble-sort/README.md)
- [chunk](src/array/chunk/README.md)
- [compact](src/array/compact/README.md)
- [heapSort](src/array/heap-sort/README.md)
- [insertionSort](src/array/insertion-sort/README.md)
- [intersection](src/array/intersection/README.md)
- [mergeSort](src/array/merge-sort/README.md)
- [partition](src/array/partition/README.md)
- [permutations](src/array/permutations/README.md)
- [quickSort](src/array/quick-sort/README.md)
- [range](src/array/range/README.md)
- [sample](src/array/sample/README.md)
- [selectionSort](src/array/selection-sort/README.md)
- [shuffle](src/array/shuffle/README.md)
- [timSort](src/array/tim-sort/README.md)
- [unique](src/array/unique/README.md)

### Core

- [buildUrl](src/core/build-url/README.md)
- [createCounter](src/core/create-counter/README.md)
- [isArray](src/core/is-array/README.md)
- [isBigInt](src/core/is-big-int/README.md)
- [isBoolean](src/core/is-boolean/README.md)
- [isDate](src/core/is-date/README.md)
- [isError](src/core/is-error/README.md)
- [isFloat](src/core/is-float/README.md)
- [isFunction](src/core/is-function/README.md)
- [isInteger](src/core/is-integer/README.md)
- [isNull](src/core/is-null/README.md)
- [isNumber](src/core/is-number/README.md)
- [isObject](src/core/is-object/README.md)
- [isString](src/core/is-string/README.md)
- [isSymbol](src/core/is-symbol/README.md)
- [isUndefined](src/core/is-undefined/README.md)
- [memoize](src/core/memoize/README.md)
- [parseUrl](src/core/parse-url/README.md)
- [retry](src/core/retry/README.md)
- [scheduler](src/core/scheduler/README.md)
- [sleep](src/core/sleep/README.md)
- [throttle](src/core/throttle/README.md)
- [toType](src/core/to-type/README.md)

### Date

- [age](src/date/age/README.md)
- [dateCalculator](src/date/date-calculator/README.md)
- [daysBetweenDates](src/date/days-between-dates/README.md)
- [formatDate](src/date/format-date/README.md)
- [isLeapYear](src/date/is-leap-year/README.md)
- [isWeekend](src/date/is-weekend/README.md)

### Math

- [nCr](src/math/arrangements/README.md)
- [nPr](src/math/arrangements/README.md)
- [binomial](src/math/binomial/README.md)
- [clamp](src/math/clamp/README.md)
- [factorial](src/math/factorial/README.md)
- [gcd](src/math/gcd/README.md)
- [hypergeometric](src/math/hypergeometric/README.md)
- [iqr](src/math/iqr/README.md)
- [lcm](src/math/lcm/README.md)
- [lerp](src/math/lerp/README.md)
- [mean](src/math/mean/README.md)
- [median](src/math/median/README.md)
- [mode](src/math/mode/README.md)
- [poisson](src/math/poisson/README.md)
- [q1](src/math/quartile/README.md)
- [q2](src/math/quartile/README.md)
- [q3](src/math/quartile/README.md)
- [q4](src/math/quartile/README.md)
- [randomInt](src/math/random-int/README.md)
- [rotateMatrix](src/math/rotate-matrix/README.md)
- [std](src/math/std/README.md)
- [sum](src/math/sum/README.md)
- [variance](src/math/variance/README.md)

### String

- [capitalize](src/string/capitalize/README.md)
- [convertCase](src/string/convert-case/README.md)
- [isUUID](src/string/is-uuid/README.md)
- [numberToRoman](src/string/number-to-roman/README.md)
- [replaceAll](src/string/replace-all/README.md)
- [reverse](src/string/reverse/README.md)
- [truncate](src/string/truncate/README.md)

### System

- [measurePerformance](src/system/measure-performance/README.md)

## Contributing

Contributions are welcome! For major changes, please open an issue first to discuss what you would like to change. Ensure to update tests as appropriate.

## License

This project is licensed under the [MIT License](LICENSE).
