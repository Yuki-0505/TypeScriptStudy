/**
 * 类型断言
 * querySelector()默认返回类型为 Element
 * Element 是一个宽泛的类型，只包含一些公共的属性
 * 具体类型可通过 __proto__ 属性查看
 */
var img = document.querySelector('#image');
var btn = document.querySelector('#btn');
// 监听事件
btn.addEventListener('click', handleClick);
function handleClick(event) {
    console.log('点击按钮', event.target);
}
var txt = document.querySelector('#txt');
// 操纵元素style
txt.style.fontSize = '24px';
console.log(txt.style.fontSize);
txt.innerText = 'miss';
