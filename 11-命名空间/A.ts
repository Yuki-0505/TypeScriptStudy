/**
 * 命名空间
 * 避免命名重复
 */
export namespace A {
  export interface Person {
    name: string
    eat(): void
  }
  // 命名空间中的属性默认是private，需要export导出
  export class User implements Person {
    name: string
    constructor(name: string) {
      this.name = name
    }
    eat(): void {
      console.log(this.name + ': eating...')
    }
  }
}
