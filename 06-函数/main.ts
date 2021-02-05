/**
 * 函数
 */
function sum1(...args: number[]): number {
  let total: number = 0
  for (let i: number = 0, len: number = args.length; i < len; i++) {
    total += args[i]
  }
  return total
}
console.log(sum1(2, 5, 7, 8))

function sum2(args: number[]): number {
  let total: number = 0
  for (let i: number = 0, len: number = args.length; i < len; i++) {
    total += args[i]
  }
  return total
}
console.log(sum2([2, 5, 7, 8]))

/**
 * 回调函数参数注解
 * 函数返回值为任意类型any
 * 回调函数省略注解时会进行类型推论
 */
function fn(callback: (a: number, b: number) => number): any {
  console.log(callback(100, 100))
}
console.log(fn((a, b) => a + b))
// > undefined
