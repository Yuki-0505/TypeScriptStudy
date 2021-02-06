/**
 * 泛型函数
 * 可以传入不同类型参数
 * 保证参数和返回值类型的统一
 */
function getData<T>(value: T): T {
  return value
}
console.log(getData<number>(2423))

/**
 * 泛型类
 */
class MinClass<T> {
  private list: T[] = []
  public append(value: T): void {
    this.list.push(value)
  }
  public min(): T {
    return this.list.reduce((prev, curr) => prev > curr? curr: prev, this.list[0])
  }
}

let m1 = new MinClass<number>()
m1.append(2)
m1.append(4)
m1.append(5)
m1.append(1)
console.log(m1.min())
let m2 = new MinClass<string>()
m2.append('f')
m2.append('a')
m2.append('g')
m2.append('r')
console.log(m2.min())

/**
 * 泛型接口
 */
interface Fn {
  <T>(value: T): T
}
let fun: Fn = function<T>(value: T): T {
  return value
}
interface Config<T> {
  (value: T): T
}
function getValue<T>(value: T): T {
  return value
}
let fun2: Config<string> = getValue
console.log(fun2('23'))
