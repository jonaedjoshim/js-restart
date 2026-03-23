// task 1 : sum two numbers
function add(a, b) {
    return a + b;
}
console.log(add(2, 4))

//task 2 : greetings
function greet(x) {
    return `Hello ${x}`;
}
console.log(greet("Jonaed"))

// task 3 : check even odd numbers
function test(num) {
    return num % 2 === 0 ? "Even number" : "Odd number";
}
console.log(test(20))

// task 4 : return (1-n) er sum
function sum(n) {
    let summation = 0
    for (let i = 1; i <= n; i++) {
        summation += i
    }
    return summation;
}
console.log(sum(10))

// task 5 : sum the elements of an array
let arr = [1, 2, 3, 4, 5, 6]

function calculateSum(arr) {
    let summation = 0;
    for (let i = 0; i < arr.length; i++) {
        summation += arr[i]
    }
    return summation;
}
console.log(calculateSum(arr))

// task 6 : even numbers array
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

// task 7 : square
function getTheSquareOfNumber(num) {
    return num * num;
}
console.log(getTheSquareOfNumber(5))

// task 8 : biggest number
function findThebiggestNumber(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        return "First number is biggest"
    } else if (num2 > num3 && num2 > num1) {
        return "Second number is biggest"
    } else {
        return "Third number is biggest"
    }
}
console.log(findThebiggestNumber(2, 5, 1))

// task 8 : biggest number -> clean code 

function findBiggest(a, b, c) {
    let biggest = a;
    if (b > biggest) {
        biggest = b;
    }
    if (c > biggest) {
        biggest = c;
    }
    return biggest;
}
console.log(findBiggest(2, 5, 1))

// task 9 : smallest number
function getTheSmallestNumber(arr) {
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < smallest) {
            smallest = arr[i]
        }
    }
    return smallest;
}
console.log(getTheSmallestNumber(arr))

// task 10 : odd count
function getTheCountOfOddNum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
}
console.log(getTheCountOfOddNum(arr))

// task 11 : reverse string
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}
console.log(reverseString("hello"))

// task 12 : even count
function getTheCountOfEvenNum(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            count++;
        }
    }
    return count;
}
console.log(getTheCountOfEvenNum(arr))

// task 13 : doubled array
function getTheDoubledNumArr(arr) {
    let doubledArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubledArr.push(arr[i] * 2)
    }
    return doubledArr
}
console.log(getTheDoubledNumArr(arr))