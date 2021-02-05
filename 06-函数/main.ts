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

function fn(a: number, b: number): void {
  console.log(a + b)
}

let v: void = fn(3, 5)
console.log(v)
// > undefined
