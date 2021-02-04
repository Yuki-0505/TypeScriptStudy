/**
 * 运算符
 * +'1' 将字符串转化为数字
 */
// 在js中减法会转化为数字运算，加法会转化为字符串连接
console.log(+'2' - 1)
console.log(2 - +'1')

console.log('2' + -'1')
// > 2-1
console.log('2' + +'1')
// > 21

/**
 * 判断运算符
 */
console.log(undefined === null)
console.log(undefined !== null)

/**
 * 与或非
 */
console.log(!null && 4)
// > 4
console.log(null && 4)
// > null
console.log(!undefined && 4)
// > 4
console.log(undefined && 4)
// > undefined
console.log(!null || 4)
// > true
console.log(null || 4)
// > 4

/**
 * 三元运算符
 */
console.log(3 > 4? true: false)
