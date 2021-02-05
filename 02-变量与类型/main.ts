/**
 * 数据类型: 原始数据类型(基本数据类型)/对象类型(复杂数据类型)
 * 基本数据类型: number/string/boolean/undefined/null
 */
let age: number = 18

let user: string = "miss"

let flag: boolean = true

let u: undefined = undefined

let n: null = null

console.log(age, user, flag)

console.log(u == n)
// > true
console.log(u === n)
// > false

/**
 * 枚举
 * 只可访问，不可赋值
 * 默认值为从0开始自增的数值
 * 当设置值为字符串时无法自增
 */
enum Week { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday }
console.log(Week.Monday, Week.Sunday)

enum Gender {
  Female = '女',
  Male = '男'
}
let gender: Gender = Gender.Female
console.log(gender)
