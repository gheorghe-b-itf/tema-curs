
let button = document.querySelector('.launch')
let divTable = document.getElementById('table');
let table = document.querySelector('.table');
let launch = function () {

    button.style.display = 'none';
    divTable.style.display = 'block';
    table.style.textAlign = 'center';
    table.setAttribute('border', '1');
    let data = []


    axios
        .get('https://api.spacexdata.com/v4/crew')
        .then(function (response) {
            // success
            data = response.data;
            console.log(data);
            return data
        })
        .catch(function (error) {
            // error
            console.log(error);
        })
        ;
    console.log(data);

    for (let i = 0; i < 3; i++) {
        let tr = document.createElement('tr');
        for (let j = 0; j < 2; j++) {
            let td = document.createElement('td');
            td.appendChild(document.createTextNode('x'))

            // console.log(cell)
            tr.appendChild(td)
        }
        table.appendChild(tr);
        divTable.appendChild(table);
    }
}



button.addEventListener('click', launch)

