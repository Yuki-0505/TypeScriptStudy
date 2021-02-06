/**
 * 对象类型注解
 */
let person: {
  username: string,
  age: number,
  sayHi: () => void
  sum: (a: number, b: number) => number
}
person = {
  username: 'miss',
  age: 18,
  sayHi() {
    console.log('hello')
  },
  sum(a: number, b: number) {
    return a + b
  }
}
person.sayHi()
console.log(person.sum(4, 5))

/**
 * class/interface/abstract
 * public/protected/private
 * extends/implements
 */
abstract class Father {
  protected name: string
  constructor(name: string) {
    this.name = name
  }
  public abstract run(): void
  public static main(): void {
    console.log('main.')
  }
}
class Son extends Father {
  private age: number
  constructor(name: string, age: number) {
    super(name)
    this.age = age
  }
  public run(): void {
    console.log('running...')
  }
}
interface Person {
  sayHi(): void
}
class User implements Person {
  sayHi(): void {
    console.log('hello')
  }
}

