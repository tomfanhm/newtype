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
  selectionSort: arrayMap.selectionSort,
  insertionSort: arrayMap.insertionSort,
  mergeSort: arrayMap.mergeSort,
  quickSort: arrayMap.quickSort,
  heapSort: arrayMap.heapSort,
  timSort: arrayMap.timSort,
  chunk: arrayMap.chunk,
  compact: arrayMap.compact,
  // Core
  lerp: coreMap.lerp,
  checkRectangleCollision: coreMap.checkRectangleCollision,
  // Date
  // Math
  sum: mathMap.sum,
  mode: mathMap.mode,
  median: mathMap.median,
  mean: mathMap.mean,
  // Regex
  // String
  isUUID: stringMap.isUUID,
  numberToRoman: stringMap.numberToRoman,
  capitalize: stringMap.capitalize,
  // System
  measurePerformance: systemMap.measurePerformance,
}
