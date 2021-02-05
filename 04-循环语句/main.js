/**
 * 循环语句
 */
console.log('begin.');
for (var i = 0; i < 5; i++) {
    if (i === 3) {
        continue;
    }
    if (i === 4) {
        break;
    }
    console.log('I Love U');
}
console.log('end.');
