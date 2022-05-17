let myArray = [1, 9, 4, 2, 8, 4, 7, 2, 1, 5, 4, 4, 3, 3, 8, 9];
let sum = 0;
let num4xtimes = 0;
let mySecondArray = [];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
    sum += myArray[i];
}
console.log("myArray has " + myArray.length + " values.");
console.log(sum);

for (let i = 0; i < myArray.length; i++) {
    myArray[i] === 4 ? num4xtimes++ : num4xtimes
}
console.log(num4xtimes);

for (let i = 0; i < myArray.length; i++) {
    myArray[i - 1] == myArray[i] ? console.log(myArray[i]) : 0
    mySecondArray.push(myArray[i] - 1);
}
console.log(mySecondArray);

let showValue = () => {
    let inputValue = prompt('Enter a number between 1 to 16');
    let valueGiven = mySecondArray[inputValue - 1]
    alert(valueGiven);
}

let copySecondArray = mySecondArray;
mySecondArray = [];

for (let i = 0; i < myArray.length; i++) {
    copySecondArray[i] <= 4 ?
        mySecondArray.push([copySecondArray[i], copySecondArray[i] + 1, copySecondArray[i] + 2])
        : mySecondArray.push([copySecondArray[i], copySecondArray[i] - 1, copySecondArray[i] - 2])
}
console.log(mySecondArray);
console.log(copySecondArray);

