let divPatrat = document.querySelector('.divPatrat');
let onDivClick = function () {
    let changePosition = document.querySelector('.divPatrat')
    changePosition.style.position = 'fixed';
    changePosition.style.bottom = '0';
    changePosition.style.right = '0';
    changePosition.style.margin = '0px 50px 50px 0px';
}

divPatrat.addEventListener('click', onDivClick)
