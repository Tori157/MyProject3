// 1.create array by literal
const x = [1, 3, 5, 7, 9]
// element are object data ype
const students = [
  { id: 65130500112, name: 'puttinat1' },
  { id: 65130500113, name: 'puttinat2' },
  { id: 65130500114, name: 'puttinat3' }
]
console.log(students.length) // 3
console.log(students[0]) // id: 65130500112, name: 'puttinat1'
// element art array data types
const studentIDs = [
  [1001, 1002, 1005],
  [65130112, 65130113, 65130114],
  [1, 2, 3],
  [123]
]
console.log(studentIDs.length) // 4
console.log(studentIDs[1]) // [65130112, 65130113, 65130114]
console.log(studentIDs.length - 1) // [123]
console.log(studentIDs[0][1]) // 1002
