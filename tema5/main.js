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
// let equation = substract(add((divide(4,x),5)),add(divide(multiply(x,(add(substract(34,x),10))),6),x))
// let equation = divide(multiply(x,(add(substract(34,x),10))),6)
let equation = add(substract(add(divide(4,x),5),divide(multiply(x,(add(substract(34,x),10))),6)),4)
console.log(equation)