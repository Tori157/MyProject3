let score = 50
let grade
if (score < 0 || score > 100) grade = 'invalid scores'
else {
  if (score <= 40) grade = 'F'
  else if (score <= 70) grade = 'B'
  else grade = 'A'
}
console.log(grade)

let gradeMeaning
switch (grade) {
  case 'F':
    gradeMeaning = 'Need Improvement'
    break
  case 'B':
    gradeMeaning = 'Good'
    break
  case 'A':
    gradeMeaning = 'Very Good'
    break
  default:
    'No meaning'
}
console.log(gradeMeaning)

let ch = 'p'
let isVowel = false
switch (ch) {
  case 'A':
  case 'a':
  case 'E':
  case 'e':
  case 'I':
  case 'i':
  case 'O':
  case 'o':
  case 'U':
  case 'u':
    isVowel = true
}
console.log(isVowel)

for (let index = 0; index < 10; index++) {
  console.log(index)
}

let nums = [10, 20, 30]
for (const num of nums) {
  console.log(num)
}

let obj = { id: 1, title: 'JS' }
for (const key in obj) {
  console.log(`${key}:${obj[key]}`)
}
