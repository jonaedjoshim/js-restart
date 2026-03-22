// task 1 : 1 to 10
for (let i = 1; i < 11; i++) {
    console.log(i)
}

// task 2 : 10 to 1 reverse
for (let i = 10; i > 0; i--) {
    console.log(i)
}

// task 3 : 1 to 20 find even number
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0)
        console.log(i)
}

// task 4 : 1 to 10 sum

let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum = sum + i
}
console.log(`Total sum is ${sum}`)

// task 5 : 1 to 50 divided by 3

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0)
        console.log(i)
}

// task 6 : multiplication number 5

let num = 5;
for (let i = 1; i <= 10; i++) {
    let result = num * i
    console.log(`${num} x ${i} = ${result}`)
}
