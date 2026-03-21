// task 1 : check number positive or negative

let a = 4
let result = (a > 0) ? "positive" : "negative"

// task 2 : age checker 

let age = 22
let validity = (age >= 18) ? "adult" : "teen"

// task 3 : number compare

let x = 20
let y = 30
let compare = (x > y) ? "X is greater than Y" : "Y is greater than X"

// task 4 : checking odd
let num = 20
let check = (num % 2 === 0) ? 'The number is Even' : 'The number is Odd'

// task 5 : finding the biggest number 

let p = 2
let q = 5
let r = 10

if ((p > q) && (p > r)) {
    console.log("P is the biggest number")
} else if ((q > p) && (q > r)) {
    console.log("Q is the biggest number")
} else {
    console.log("R is the biggest number")
}

// mini challenge-1 : grade system 

let mark = 59

if (mark >= 80) {
    console.log("Your grade is A")
} else if (mark >= 60) {
    console.log("Your grade is B")
} else {
    console.log("Better luck next time, you got failed")
}

// mini challenge-2 : password checker

let password = "1234666"
let valid = (password.length >= 6) ? "Valid" : "Too Short"
console.log(valid)