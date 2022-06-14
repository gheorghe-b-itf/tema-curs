let createButton = function(name, action) {
    let button = document.createElement('button');
    button.innerHTML = name;
    button.addEventListener('click', action);
    return button;
};

let theBody = document.querySelector('body');

let fourthAction = function() {
    let fifthButton = createButton('Fifth', function() {alert('stop')});
    theBody.appendChild(fifthButton);
};

let thirdAction = function() {
    let fourthButton = createButton('Fourth', fourthAction);
    theBody.appendChild(fourthButton);
};

let secondAction = function() {
    let thirdButton = createButton('Third', thirdAction);
    theBody.appendChild(thirdButton);
};

let firstAction = function() {
    let secondButton = createButton('Second', secondAction);
    theBody.appendChild(secondButton);
};

let firstButton = createButton('First', firstAction);
theBody.appendChild(firstButton);
