import * as arrayMap from "./array"
import * as coreMap from "./core"
import * as dateMap from "./date"
import * as mathMap from "./math"
import * as stringMap from "./string"
import * as systemMap from "./system"

// Array Functions
export const {
  all,
  any,
  bubbleSort,
  chunk,
  compact,
  heapSort,
  insertionSort,
  intersection,
  mergeSort,
  partition,
  permutations,
  quickSort,
  range,
  sample,
  selectionSort,
  shuffle,
  timSort,
  unique,
} = arrayMap

// Core Functions
export const {
  buildUrl,
  createCounter,
  isArray,
  isBigInt,
  isBoolean,
  isDate,
  isError,
  isFloat,
  isFunction,
  isInteger,
  isNull,
  isNumber,
  isObject,
  isString,
  isSymbol,
  isUndefined,
  parseUrl,
  scheduler,
  sleep,
  toType,
} = coreMap

// Date Functions
export const { age, dateCalculator, isLeapYear, isWeekend } = dateMap

// Math Functions
export const {
  nCr,
  nPr,
  binomial,
  factorial,
  gcd,
  hypergeometric,
  iqr,
  lerp,
  mean,
  median,
  mode,
  poisson,
  q1,
  q2,
  q3,
  q4,
  rotateMatrix,
  std,
  sum,
  variance,
} = mathMap

// String Functions
export const { isUUID, numberToRoman, replaceAll, reverse, truncate } = stringMap

// System Functions
export const { measurePerformance } = systemMap
