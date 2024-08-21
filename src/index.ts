import * as arrayMap from "./array"
import * as coreMap from "./core"
// import * as dateMap from "./date"
import * as mathMap from "./math"
// import * as regexMap from "./regex"
import * as stringMap from "./string"
import * as systemMap from "./system"

export default {
  // Array
  bubbleSort: arrayMap.bubbleSort,
  chunk: arrayMap.chunk,
  compact: arrayMap.compact,
  heapSort: arrayMap.heapSort,
  insertionSort: arrayMap.insertionSort,
  mergeSort: arrayMap.mergeSort,
  quickSort: arrayMap.quickSort,
  selectionSort: arrayMap.selectionSort,
  shuffle: arrayMap.shuffle,
  timSort: arrayMap.timSort,
  // Core
  checkRectangleCollision: coreMap.checkRectangleCollision,
  createCounter: coreMap.createCounter,
  lerp: coreMap.lerp,
  scheduler: coreMap.scheduler,
  sleep: coreMap.sleep,
  // Date
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
  // Regex
  // String
  capitalize: stringMap.capitalize,
  isUUID: stringMap.isUUID,
  numberToRoman: stringMap.numberToRoman,
  // System
  measurePerformance: systemMap.measurePerformance,
}
