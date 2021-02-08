/**
 * 装饰器
 */
// 类装饰器
// function logClass(params: any) {
//   params.prototype.apiUrl = 'xxx'
// }
// @logClass
// class HttpClient {
//   constructor() {}
//   public getDate() {
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//   }
// }
// let http: any = new HttpClient()
// console.log(http.apiUrl)
// 装饰器工厂
function logClass(params) {
    return function (target) {
        target.prototype.apiUrl = params;
    };
}
var HttpClient = /** @class */ (function () {
    function HttpClient() {
    }
    HttpClient.prototype.getDate = function () {
    };
    HttpClient = __decorate([
        logClass('http://localhost:8080/index')
    ], HttpClient);
    return HttpClient;
}());
var http = new HttpClient();
console.log(http.apiUrl);
