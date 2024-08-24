import * as arrayMap from "./array"
import * as coreMap from "./core"
import * as dateMap from "./date"
import * as mathMap from "./math"
import * as stringMap from "./string"
import * as systemMap from "./system"

export default {
  // Array
  bubbleSort: arrayMap.bubbleSort,
  chunk: arrayMap.chunk,
  compact: arrayMap.compact,
  heapSort: arrayMap.heapSort,
  insertionSort: arrayMap.insertionSort,
  intersection: arrayMap.intersection,
  mergeSort: arrayMap.mergeSort,
  quickSort: arrayMap.quickSort,
  selectionSort: arrayMap.selectionSort,
  shuffle: arrayMap.shuffle,
  timSort: arrayMap.timSort,
  // Core
  buildUrl: coreMap.buildUrl,
  checkRectangleCollision: coreMap.checkRectangleCollision,
  createCounter: coreMap.createCounter,
  isArray: coreMap.isArray,
  isBigInt: coreMap.isBigInt,
  isBoolean: coreMap.isBoolean,
  isDate: coreMap.isDate,
  isError: coreMap.isError,
  isFloat: coreMap.isFloat,
  isFunction: coreMap.isFunction,
  isInteger: coreMap.isInteger,
  isNull: coreMap.isNull,
  isNumber: coreMap.isNumber,
  isObject: coreMap.isObject,
  isString: coreMap.isString,
  isSymbol: coreMap.isSymbol,
  isUndefined: coreMap.isUndefined,
  lerp: coreMap.lerp,
  parseUrl: coreMap.parseUrl,
  scheduler: coreMap.scheduler,
  sleep: coreMap.sleep,
  // Date
  age: dateMap.age,
  dateCalculator: dateMap.dateCalculator,
  isLeapYear: dateMap.isLeapYear,
  isWeekend: dateMap.isWeekend,
  // Math
  binomial: mathMap.binomial,
  factorial: mathMap.factorial,
  iqr: mathMap.iqr,
  mean: mathMap.mean,
  median: mathMap.median,
  mode: mathMap.mode,
  nCr: mathMap.nCr,
  nPr: mathMap.nPr,
  q1: mathMap.q1,
  q2: mathMap.q2,
  q3: mathMap.q3,
  q4: mathMap.q4,
  rotateMatrix: mathMap.rotateMatrix,
  std: mathMap.std,
  sum: mathMap.sum,
  variance: mathMap.variance,
  // String
  capitalize: stringMap.capitalize,
  isUUID: stringMap.isUUID,
  numberToRoman: stringMap.numberToRoman,
  replaceAll: stringMap.replaceAll,
  // System
  measurePerformance: systemMap.measurePerformance,
}
