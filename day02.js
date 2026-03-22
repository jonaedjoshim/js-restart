//task 1 : create an object & print name, age

const user = {
    name: "Jonaed",
    age: 22,
    isStudent: true,
    nationality: "Bangladeshi",
    mobile: {
        hasMobile: true,
        brandName: "Realme",
        model: "5i",
        specification: {
            os: " android 9",
            ram: 4,
            storage: 64,
            Chipset: "Qualcomm SDM665 Snapdragon 665 (11 nm)",
            display: "IPS LCD",
        }
    }
}

let userName = user.name
let userAge = user.age
console.log(`User name is : ${userName} & his age is : ${userAge}`)

//task 2 : obeject update 

user.age = "23"
console.log(`User new age is : ${user.age}`)

//self try

user.mobile.specification.os = "adroid 10"

console.log(`User updated OS is : ${user.mobile.specification.os}`)

// task 3 : add new property

user.city = "Sirajganj"

console.log(`User updated city name is : ${user.city}`)

// task 4 : delete user 

delete user.nationality
delete user.mobile.specification.display

console.log(user)