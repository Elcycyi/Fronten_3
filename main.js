// function getFullname(user, age, user2) {
//     if(age < 18){
//         console.log("Close")
//     }else{
//         console.log(user.first_name, user2.last_name + " " + "Open")
//     }
//
// }
//
// const user = {
//     first_name: "Jack",
//     last_name: "BEKA"
// }
//
// const user2 = {
//     first_name: "Maruf",
//     last_name: "Atai"
// }
//
// getFullname(user, 18, user2)
//
// const anonym = function (user) {
//     console.log(user.first_name, user.last_name)
// }
// anonym()

// function numbers(number1, number2) {
//
//     if (number1 > number2) {
//         console.log('Первое число Больше')
//     } else if (number1 < number2) {
//         console.log("Второе число больше")
//     } else {
//         console.log(" равны")
//     }
// }
//
// const number = {
//     number1: 5,
//     number2: 2
// }
//
// numbers(number.number1, number.number2)\

//
// function twoMass(arr1, arr2) {
//     console.log(arr1, arr2)
//     if(arr1.length > arr2.length){
//         console.log(arr1 > arr2)
//     } else if(arr1.length < arr2.length){
//         console.log(arr1 < arr2)
//     } else {
//         alert('===')
//     }
// }
//
// const arr1 = [1123, 23, 123, 234]
// const arr2 = [1123, 23, 123, 234, 1234]
//
// twoMass(arr1, arr2)
//
// function tr(){
//     let line = '*'
//     while (line.length < 7){
//         console.log(line)
//         line = line + '*'
//     }
// }
// tr()

function twoNumber(number1, number2) {
    console.log(number1, number2)
    if(number1.length > number2.length){
        console.log("number1 < number2")
    } else if(number1.length < number2.length){
        console.log("number1 > number2")
    } else {
        alert('===')
    }
}

const number1 = [1123, 23, 123, 235]
const number2 = [1123, 23, 123, 234, 1234]

twoNumber(number1, number2)

function countChar(argument) {
    console.log(argument.length)
}

const argument = [12345678, 12345]

countChar(argument)