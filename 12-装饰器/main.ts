/**
 * 装饰器
 * 执行顺序：属性装饰器、方法装饰器、方法参数装饰器（从后往前）、类装饰器（从后往前）
 */
// 类装饰器
// function logClass(params: any) {
//   params.prototype.apiUrl = 'xxx'
// }
// @logClass
// class HttpClient {
//   constructor() {}
//   public getDate() {

//   }
// }
// let http: any = new HttpClient()
// console.log(http.apiUrl)

// 装饰器工厂
function logClass(params: string) {
  return function(target: any) {
    target.prototype.apiUrl = params
  }
}
// 属性装饰器
function logAttribute(params: string) {
  return function(target: any, attr: any) {
    // target是实例的原型对象
    target[attr] = params
  }
}
// 方法装饰器
function logMethod(params: string) {
  return function(target: any, method: any, desc: any) {
    const oMethod = desc.value
    desc.value = function(...args: any[]) {
      oMethod.apply(this, args.map(value => String(value)))
    }
  }
}
// 方法参数装饰器
function logParams(params: string) {
  return function(target: any, method: any, paramsIndex: any) {

  }
}
@logClass('http://localhost:8080/index')
class HttpClient {
  @logAttribute('/index?name=miss')
  private url: string | undefined
  constructor() {}
  @logMethod('http://localhost:8080/index?name=miss')
  public getDate(...args: any[]) {
    console.log(args)
    console.log('getDate...')
  }
  public show(@logParams('aaa') a: number) {
    console.log(a)
  }
}
let http: any = new HttpClient()
console.log(http.apiUrl)
console.log(http.url)
http.getDate(1, 2, 3)
