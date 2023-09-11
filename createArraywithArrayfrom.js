// 5.create array with Array.from
const x = [1, 2, 4, 8, 16, 32]
const y = Array.from(x)
console.log(x)
console.log(y)
console.log(y.length)
// memmory address of x equals to memmory address of y
// if let y = x
// y = x
// x===y
if (x === y) console.log('x===y')
else console.log('x!==y')
