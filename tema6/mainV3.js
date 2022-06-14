let createButton = function(name, action) {
    let button = document.createElement('button');
    button.innerHTML = name;
    button.addEventListener('click', action);
    return button;
};

let theBody = document.querySelector('body');

let fourthAction = function(e) {
    let fifthButton = createButton('Fifth', function() {alert('stop')});
    e.currentTarget.removeEventListener('click', fourthAction);
    theBody.appendChild(fifthButton);
};

let thirdAction = function(e) {
    let fourthButton = createButton('Fourth', fourthAction);
    e.currentTarget.removeEventListener('click', thirdAction);
    theBody.appendChild(fourthButton);
};

let secondAction = function(e) {
    let thirdButton = createButton('Third', thirdAction);
    e.currentTarget.removeEventListener('click', secondAction);
    theBody.appendChild(thirdButton);
};

let firstAction = function(e) {
    let secondButton = createButton('Second', secondAction);
    e.currentTarget.removeEventListener('click', firstAction);
    theBody.appendChild(secondButton);
};

let firstButton = createButton('First', firstAction);
theBody.appendChild(firstButton);
