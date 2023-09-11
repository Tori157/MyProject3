let someone = 'A' //* empty string
let who //* who = undefined
console.log(typeof someone) //* string
let discount = 0
var x = 5
console.log(x)
if (someone) {
  who = 'member'
  discount = 0.1
  var x = 1
  console.log(x)
} else {
  who = 'guest'
  discount = 0.05
  var x = 2
  console.log(x)
}
console.log(x)
console.log(who)
console.log(discount)
//* ?: if-else with expression
//* let who = someone ? 'member' : let who = 'guest'
//* someone ? (who = 'member') : (who = 'guest')
// who = someone ? 'member' : 'guest'
// console.log(who) //* guest
