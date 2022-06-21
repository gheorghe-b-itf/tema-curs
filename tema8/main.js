
let button = document.querySelector('.launch')
let divTable = document.getElementById('table');
let table = document.querySelector('.table > tbody');
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
            for (let i = 0; i < data.length; i++) {
                let tr = document.createElement('tr');
                // for (let j = 0; j < 2; j++) {
                    let td1 = document.createElement('td');
                    td1.appendChild(document.createTextNode(i + 1))

                    let td2 = document.createElement('td');
                    td2.appendChild(document.createTextNode(data[i].name))
        
                    // console.log(cell)
                    tr.appendChild(td1);
                    tr.appendChild(td2);
                // }
                table.appendChild(tr);
                // divTable.appendChild(table);
            }
        })
        .catch(function (error) {
            // error
            console.log(error);
        })
        ;
    console.log(data);
}



button.addEventListener('click', launch)

