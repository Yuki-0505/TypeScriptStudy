/**
 * 数组
 */
// let names: Array<string> = ['1', '2', '3']
let names: string[] = ['a', 'b', 'c']
console.log(names)
// 不推荐
// let names: string[] = new Array('a', 'b', 'c')

for (let i: number = 0, len: number = names.length; i < len; i++) {
  console.log(names[i])
}

/**
 * 元组
 */
let arr: [number, string] = [1, 'miss']
console.log(arr)
