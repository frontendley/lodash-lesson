export default function compact<T>(data: T[]) {
  return data.filter(item => item)
}