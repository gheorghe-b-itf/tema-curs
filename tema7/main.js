let divPatrat = document.querySelector('.divPatrat');
let onDivClick = function () {

    let idDiv = document.getElementById('switchButton');
    if (!(idDiv.className === 'divPatrat')) {
        idDiv.className = 'divPatrat'
    } else {
        idDiv.className = 'divPatratAbsolut'
    }

}

divPatrat.addEventListener('click', onDivClick);

// let divPatrat = document.querySelector('.divPatrat');
// let onDivClick = function () {
//     let changePosition = document.querySelector('.divPatrat')
//     changePosition.style.position = 'absolute';
//     changePosition.style.bottom = '0';
//     changePosition.style.right = '0';
//     changePosition.style.margin = '0px 50px 50px 0px'
// }
// divPatrat.addEventListener('click', onDivClick);