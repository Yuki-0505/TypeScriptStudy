/**
 * 循环语句
 */
console.log('begin.')
for (let i: number = 0; i < 5; i++) {
  if (i === 3) {
    continue
  }
  if (i === 4) {
    break
  }
  console.log('I Love U')
}
console.log('end.')
