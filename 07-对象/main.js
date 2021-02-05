/**
 * 对象类型注解
 */
var person;
person = {
  username: 'miss',
  age: 18,
  sayHi: function () {
    console.log('hello');
  },
  sum: function (a, b) {
    return a + b;
  }
};
person.sayHi();
console.log(person.sum(4, 5));
var user = {
  username: 'miss',
  age: 18,
  sayHi: function () {
    console.log('hello');
  }
};
console.log(user);
