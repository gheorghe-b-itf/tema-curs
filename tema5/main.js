let add = function (a, b) {
    return a + b
}
let substract = function (a, b) {
    return a - b
}
let divide = function (a, b) {
    return a / b
}
let multiply = function (a, b) {
    return a * b
}
let x = prompt('Please give a number for the equation:')

let equation = add(substract(add(divide(4,x),5),divide(multiply(x,(add(substract(34,x),10))),6)),4)
console.log(equation)

let checkPalindrom =(param)=>{
    if(`${param}`===param.split('').reverse().join('')){
        console.log('this is a palindrom')
    } else {
        console.log('this is not a palindrom!!')
    }
}
let z=prompt('its a palindrom?')
let result =checkPalindrom(z)

let checkBiggestWord=(word)=>{
    let biggest='';
    biggest =word.split(' ').sort((a,b)=>b.length-a.length)
    console.log(biggest[0])
}
let y=prompt('check for biggest word')
checkBiggestWord(y)