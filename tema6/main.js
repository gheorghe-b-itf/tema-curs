let secondButton = document.createElement('button');
secondButton.innerHTML = 'Second';
let content = document.getElementById('secondButton');
content.appendChild(secondButton);

secondButton.addEventListener('click', function () {
    return alert('The second button was pressed')
});

let thirdButton = document.createElement('button');
thirdButton.innerHTML = 'Start';
let secondContent = document.getElementById('thirdButton');
secondContent.appendChild(thirdButton);

thirdButton.addEventListener('click', function () {

    let buttonStep1 = document.createElement('button');
    buttonStep1.innerHTML = 'Step1';
    secondContent.appendChild(buttonStep1);
    buttonStep1.addEventListener('click', function () {

        let buttonStep2 = document.createElement('button');
        buttonStep2.innerHTML = 'Step2';
        secondContent.appendChild(buttonStep2);
        buttonStep2.addEventListener('click', function () {

            let buttonStep3 = document.createElement('button');
            buttonStep3.innerHTML = 'Step3';
            secondContent.appendChild(buttonStep3);
            buttonStep3.addEventListener('click', function () {

                let buttonStep4 = document.createElement('button');
                buttonStep4.innerHTML = 'Step4';
                secondContent.appendChild(buttonStep4);
                buttonStep4.addEventListener('click', function () {

                    let buttonStep5 = document.createElement('button');
                    buttonStep5.innerHTML = 'Step5';
                    secondContent.appendChild(buttonStep5);
                    buttonStep5.addEventListener('click', function () {

                        alert(`You've reach the end, there are no more buttons`)

                    })
                })
            })
        })
    })
});


let numButtons = prompt('Give me a number of buttons you want:');

for (let i = numButtons; (parseInt(numButtons) != numButtons) || (parseInt(numButtons) <= 0);) {
    if (parseInt(numButtons) != numButtons) {
        alert('I need a number to continue!')

    } else if (parseInt(numButtons) <= 0) {
        alert('I need a positive number to continue!')
    }
    numButtons = prompt('Give me a number of buttons you want:');
}

let createButton = function (text) {
    let button = document.createElement('button');
    button.innerHTML = text
    return button;
}

let fourthButton = document.getElementById('fourthButton')

let button = [];

for (let i = 1; i <= numButtons; i++) {
    button[i] = createButton('Button ' + i)

    if (i === 1) {
        fourthButton.appendChild(button[i])
        button[i].addEventListener('click', function () {
            fourthButton.appendChild(button[i + 1])
        });
    } else if (i < numButtons) {
        button[i].addEventListener('click', function () {
            fourthButton.appendChild(button[i + 1]);
        })
    } else button[i].addEventListener('click', function () {
        alert(`You've reach the end, there are no more buttons`);
})
}



