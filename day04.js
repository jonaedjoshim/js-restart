// task 1 : sum two numbers

function add(a, b) {
    let result = a + b
    console.log(result) // we can log or return the result
}

add(2, 4)

//task 2 : greetings

function greet(x) {
    console.log(`Hello ${x}`)
}

greet("Jonaed")

// task 3 : check even odd numbers

function test(num) {
    if (num % 2 === 0) {
        console.log("This is a Even number")
    } else {
        console.log("This is a Odd number")
    }
}

test(20)

// task 4 : return (1-n) er sum, tricky

function sum(n) {
    let summation = 0
    for (let i = 1; i <= n; i++) {
        summation = summation + i
    }
    return (summation);
}
const result = sum(10)
console.log(result)

// task 5 : sum the elements of an array

let arr = [1, 2, 3, 4, 5, 6]

function calculateSum(arr) {
    let summation = 0;
    for (let i = 0; i < arr.length; i++) {
        summation = summation + arr[i]
    }
    return summation;
}
console.log(calculateSum(arr))

// task 6 : create an array and pick even numbers to make new array

function getEvenNumbers(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
    }
    return result;
}
console.log(getEvenNumbers(arr))

// task 7 : square of a number

function getTheSquareOfNumber(num) {
    let square = num * num
    console.log(square)
}
getTheSquareOfNumber(5)

// task 8 : find biggest number among 3 numbers

function findThebiggestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("First number is the biggest number")
    } else if (num2 > num3 && num2 > num1) {
        console.log("Second number is the biggest number")
    } else {
        console.log("Third number is the biggest number")
    }
}
findThebiggestNumber(2, 5, 1)

// task 9 : find smallest number in array

function getTheSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i <= arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}
console.log(`The smallest number is ${getTheSmallestNumber(arr)}`)

// task 10 : return the odd number count from an array 

function getTheCountOfOddNum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}

console.log(`Total Odd number is ${getTheCountOfOddNum(arr)}`)

// task 11 : reverse string 

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed = reversed + str[i]
    }
    return reversed
}

console.log(reverseString("konok"))

// task 12 : return the even number count from an array 

function getTheCountOfEvenNum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}

console.log(`Total Even number is ${getTheCountOfEvenNum(arr)}`)

// task 13 :  new array from old array X 2 

function getTheDoubledNumArr(arr) {
    let doubledArr = [];
    for (let i = 0; i < arr.length; i++) {
        const double = arr[i] * 2;
        doubledArr.push(double)
    }
    return doubledArr
}
console.log(getTheDoubledNumArr(arr))