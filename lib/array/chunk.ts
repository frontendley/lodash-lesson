import { toInteger } from "lodash"
export default function chunk<T>(array: T[], size: number = 1) {
  size = Math.max(toInteger(size), 0)
  if (!size) return []

  return array.reduce((prev: T[][], cur: T, index) => {
    const length = prev.length - 1
    if (index % size === 0) {
      prev.push([cur])
    } else {
      prev[length].push(cur)
    }
    return prev
  }, [] as T[][])
}