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
 * 接口
 */
interface User {
  username: string,
  age: number,
  sayHi: () => void
}

let user: User = {
  username: 'miss',
  age: 18,
  sayHi() {
    console.log('hello')
  }
}
console.log(user)
