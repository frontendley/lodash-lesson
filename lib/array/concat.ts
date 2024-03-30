import { isArray } from "lodash";

export default function concat<T>(data: T[], ...args: any[]) {
  let i = 0;
  let temp = isArray(data) ? [...data] : [data]
  while (i < args.length) {
    const cur = args[i]
    temp = isArray(cur) ? [...temp, ...cur] : [ ...temp, cur] 
    i++
  }
  return temp
}