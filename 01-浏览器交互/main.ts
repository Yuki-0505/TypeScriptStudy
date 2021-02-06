/**
 * 类型断言
 * querySelector()默认返回类型为 Element
 * Element 是一个宽泛的类型，只包含一些公共的属性
 * 具体类型可通过 __proto__ 属性查看
 */
let img = document.querySelector('#image') as HTMLImageElement
let btn = document.querySelector('#btn') as HTMLButtonElement
// 监听事件
btn.addEventListener('click', handleClick)
function handleClick(event: MouseEvent) {
  console.log('点击按钮', event.target)
}
let txt = document.querySelector('#txt') as HTMLParagraphElement
// 操纵元素style
txt.style.fontSize = '24px'
console.log(txt.style.fontSize)
txt.innerText = 'miss'
