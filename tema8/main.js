
let button = document.querySelector('.launch')
let divTable = document.getElementById('table');
let table = document.querySelector('.table > tbody');
let launch = function () {

    button.style.display = 'none';
    divTable.style.display = 'block';
    table.style.textAlign = 'center';

    let data = []

    axios
        .get('https://api.spacexdata.com/v4/crew')
        .then(function (response) {
            // success
            data = response.data;
            console.log(data);
            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement('tr');
                let td1 = document.createElement('td');
                let td2 = document.createElement('td');

                td1.appendChild(document.createTextNode(i + 1))
                td2.appendChild(document.createTextNode(data[i].name))

                tr.appendChild(td1);
                tr.appendChild(td2);
                table.appendChild(tr);
            }
        })
        .catch(function (error) {
            // error
            console.log(error);
        })
        ;
}

button.addEventListener('click', launch)

