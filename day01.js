// task 1 : check number positive or negative

let a = 4
let result = (a > 0) ? "positive" : "negative"
console.log(result)

// task 2 : age checker 

let age = 22
let validity = (age >= 18) ? "adult" : "teen"
console.log(validity)

// task 3 : number compare

let x = 20
let y = 30
let compare = (x > y) ? "X is not greater than Y" : "Y is not greater than X"
console.log(compare)


// mini challenge : grade system 

let mark = 59

if (mark >= 80) {
    console.log("Your grade is A")
} else if (mark >= 60) {
    console.log("Your grade is B")
} else {
    console.log("Better luck next time, you got failed")
}
