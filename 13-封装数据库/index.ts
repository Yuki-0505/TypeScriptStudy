export namespace DB {
  /**
   * 封装数据库
   * mysql/mongodb/mssql
   */
  interface DBI<T> {
    add(info: T): boolean
    update(info: T, id: number): boolean
    delete(id: number): boolean
    get(id: number): any[]
  }

  // mysql
  class MySqlDb<T> implements DBI<T> {
    add(info: T): boolean {
      throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
      throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
      throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
      throw new Error("Method not implemented.");
    }
  }
  // mongodb
  class MongoDb<T> implements DBI<T> {
    add(info: T): boolean {
      throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
      throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
      throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
      throw new Error("Method not implemented.");
    }
  }
  // mssql
  class MsSqlDb<T> implements DBI<T> {
    add(info: T): boolean {
      throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
      throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
      throw new Error("Method not implemented.");
    }
    get(id: number): any[] {
      throw new Error("Method not implemented.");
    }
  }
  // user类和数据表映射
  class User {
    username: string | undefined
    password: string | undefined
    constructor(username: string | undefined, password: string | undefined) {
      this.username = username
      this.password = password
    }
  }

  let user = new User('miss', '123456')
  let oDb: DBI<User> = new MySqlDb<User>()
  oDb.add(user)

}
