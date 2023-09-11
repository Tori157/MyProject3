// array can contain differant adta types in one array
const x = [1, true, 'A']
console.log(x)
console.log(x.length) // length is size of array
console.log(x[0]) // get the last element of array
// array size can grow dynamically
x[1] = false
x[x.length] = 555 // append a new element
x.push(888) //
console.log(x)

console.log(x[x.length - 1])

const y = ['A'] // y is empty array
let z

console.log(typeof y)
console.log(typeof z)

if (y.length === 0) console.log('y is an empty array')
else console.log('y is not an empty array')

if (z?.length === 0) console.log('z is an empty array')
else console.log('z is not an empty array')



