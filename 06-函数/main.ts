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

/**
 * 剩余参数
 */
function sum1(...args: number[]): number {
  let total: number = 0
  for (let i: number = 0, len: number = args.length; i < len; i++) {
    total += args[i]
  }
  return total
}
console.log(sum1(2, 5, 7, 8))

/**
 * 可选参数
 * 必须放到最后面
 */
function fn1(name: string, age?: number) {
  if (age) {
    console.log(name, age)
  } else {
    console.log(name)
  }
}
fn1('miss')

/**
 * 默认参数
 * 必须放到最后面
 */
function fn2(name: string, age: number = 20) {
  console.log(name, age)
}
fn2('miss')

/**
 * 方法重载
 * 事实上利用可选参数和默认参数完全可以替代方法重载
 */
function getInfo(name: string): string
function getInfo(name: string, age: number): string
function getInfo(name: any, age?: any): string {
  if (age) {
    return name
  } else {
    return name + age
  }
}
console.log('miss', 17)
