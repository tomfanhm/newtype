/**
 * Checks for collision between two 2D rectangles using object properties.
 *
 * @param obj1 - An object containing the properties x, y, width, and height for the first rectangle.
 * @param obj2 - An object containing the properties x, y, width, and height for the second rectangle.
 * @returns true if there is a collision, false otherwise.
 */
export default function checkRectangleCollision(
  obj1: { x: number; y: number; width: number; height: number },
  obj2: { x: number; y: number; width: number; height: number }
): boolean {
  if (obj1.x + obj1.width < obj2.x) return false
  if (obj1.x > obj2.x + obj2.width) return false
  if (obj1.y + obj1.height < obj2.y) return false
  if (obj1.y > obj2.y + obj2.height) return false

  return true
}
