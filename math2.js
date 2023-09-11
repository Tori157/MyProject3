// //* random Dice 1-6
// let rand = Math.floor(Math.random() * 6) + 1 //* 1-7*
// console.log(rand)

// //* random in a range 10 to 50
// let rand2 = Math.floor(Math.random() * 41) + 10 //* 1-7*
// console.log(rand2)
// //* 0-40
// //* 10-50

// //* random in a range 100-1000
// let rand3 = Math.floor(Math.random() * 901) +100
// console.log(rand3)
// //*0-900
// //*100-1000

// //* random in a ranfe 1-100
// let min = 1
// let max = 100
// let rand4 =Math.floor(Math.random() *(max-min+1)) + min

// //* 1.Math.random() -> 0 - 0.99999*
// //* 2.No1. * 100 -> 0 - 99.999999*
// //* 3.Math.floor(No.2) -> 0 - 99
// //* 4.No.3 + min -> 1 - 100

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

let rand1 = randomNumber(1, 6)
let rand2 = randomNumber(10, 100)
let rand3 = randomNumber(1, 100)
let rand4 = randomNumber(2, 12)

