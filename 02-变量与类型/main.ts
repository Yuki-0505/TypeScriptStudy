/**
 * 数据类型: 原始数据类型(基本数据类型)/对象类型(复杂数据类型)
 * 基本数据类型: number/string/boolean/undefined/null
 * any/null/undefined/void/never
 */
let age: number = 18

let username: string = "miss"

let flag: boolean = true

let u: undefined = undefined

let n: null = null

console.log(age, username, flag)

console.log(u == n)
// > true
console.log(u === n)
// > false

// 数字类型或未定义类型
let num: number | undefined
num = 123
console.log(num)
