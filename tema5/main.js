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
let x = () => {
    let x = prompt('Please give a number for the equation:')
    let equation = add(substract(add(divide(4, x), 5), divide(multiply(x, (add(substract(34, x), 10))), 6)), 4)
    console.log(equation)
}


let z = () => {
    let z = prompt('its a palindrom?')

    let checkPalindrom = (param) => {
        if (`${param}` === param.split('').reverse().join('')) {
            console.log('this is a palindrom')
        } else {
            console.log('this is not a palindrom!!')
        }
    }
    let createButton = function (text) {
        let button = document.createElement('button');
        button.innerHTML = text
        return button;
    }
    let buttonStart = createButton('Click to find the char at')
    let divButton = document.getElementById('palindrome')
    divButton.appendChild(buttonStart);

    if (buttonStart.addEventListener('click', function () {
        let num = prompt(`Click to find the character at the position chosen. Check Console`)
        return console.log(z.charAt(num));
    })) {
    }
    return checkPalindrom(z)
}

let y = () => {
    let y = prompt('Write a sentence:')
    let checkBiggestWord = (word) => {
        let biggest = '';
        biggest = word.split(' ').sort((a, b) => b.length - a.length)
        console.log(biggest[0])
    }
    return checkBiggestWord(y)
}

let w = () => {
    let w = prompt('Write a sentence:')
    let sentenceArr = w.split(' ').sort((a, b) => b.length - a.length)
    console.log(sentenceArr[0].length)
}

let q = () => {
    let q = prompt('Write a positiv integer number to check factorial:')

    if (((q > 0) && (Math.floor(q) == q))) {
        let num = q
        for (let i = q - 1; i > 0; i--) {
            num *= i
        }
        return console.log(num)
    } else return console.log(-1)
}

let arr = [2, 4, 8, 1, 9, 4, 5, 5, 8, 9, 1, 3, 2];
let sum = 0;
let multiNum = 1;
let twoFunc = () => {
    let a = prompt('Write + or * if you want to add or to multiply:')
    switch (a) {
        case `+`:
            for (let i = 0; i < arr.length; i++) {
                sum += arr[i]
            }
            console.log(sum);
            break;
        case `*`:
            for (let i = 0; i < arr.length; i++) {
                multiNum *= arr[i]
            }
            console.log(multiNum);
            break;
    }
}

let person = {
    firstName: 'Gheorghe',
    lastName: 'Burduja',
    sex: 'm',
    doYouLikeMe: function () {
        let a = prompt('Do you like me? Yes/No')
        if (a.toLocaleLowerCase() == 'yes') {
            console.log(`You're a good person! ;) I Like you!`)
        } else if (a.toLocaleLowerCase() == 'no') {
            console.log('Try harder! Eventually you will like me :)')
        } else console.log('You have to choose between Yes or No')
    }
}

let object = {
    add: add,
    substract: substract,
    divide: divide,
    multiply: multiply,
    checkPalindrom: z,
    checkBiggestWord: y,
    lengthOfBiggestNum: w,
    checkFactorial: q,
    addOrMultiplyArrValues: twoFunc,
    doYouLikeMe: person.doYouLikeMe

}

let a = object;