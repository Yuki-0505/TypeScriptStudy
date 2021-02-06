/**
 * 函数类型接口
 * 约束函数的参数及返回值
 */
interface encrypt {
  (key: string, value: string): string
}
let md5: encrypt = function(key, value) {
  return key + ':' + value
}

/**
 * 可索引接口
 */
interface UserArr {
  [index: number]: string
}
let arr1: UserArr = ['miss', 'jack']
console.log(arr1[0])
interface UserObj {
  [index: string]: string
}
let arr2: UserObj = {name: 'miss', age: '20'}
console.log(arr2['name'])

/**
 * 类类型接口
 */
interface Animal {
  name: string
  eat(str: string): void
}
class Cat implements Animal {
  name: string
  constructor(name: string) {
    this.name = name
  }
  // 可不提供参数
  eat(): void {
    console.log('eating...')
  }
}
new Cat('miss').eat()

/**
 * 接口扩展
 */
interface Person extends Animal {
  work(): void
}
