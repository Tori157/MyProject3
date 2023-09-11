//* optional chaining ?.
//* ถ้ามีค่าก็ ทำเป็นตัวเล็ก เเล้วก็ไปต่อ

// let str = 'Guest'
// console.log(str?.toLowerCase())

// let nums
// console.log(nums?.[0])

// let obj
// console.log(obj?.id)

//* nullish Coalesing (??)
//* [] represents empty arrat
//* {} represents empty object
let nums = [1, 2, 3]
let arr
arr = nums ?? []
console.log(nums)
console.log(arr)
