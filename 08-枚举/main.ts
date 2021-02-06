/**
 * 枚举
 * 只可访问，不可赋值
 * 默认值为从0开始自增的数值
 * 当设置值为字符串时无法自增
 * 应用场景：错误码
 */
enum Week { Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday }
console.log(Week.Monday, Week.Sunday)

enum Gender {
  Female = '女',
  Male = '男'
}
let gender: Gender = Gender.Female
console.log(gender)
