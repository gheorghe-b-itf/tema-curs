
let curentDateArr = moment().format("ddd DD M YYYY").split(' ')
console.log(curentDateArr)

let a = curentDateArr[3];
let b = curentDateArr[2] - 1;
let c = curentDateArr[1];
let date = new Date(a, b, c);
let dateWrapper = moment(date)._d.toString()
console.log(dateWrapper)


let title = document.querySelector('.title>h1').innerText = moment(new Date(dateWrapper)).format("MMMM")



let dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

let table = document.querySelector('.tableCalendar')
let trHead = document.createElement('tr');
table.appendChild(trHead);

for (let i = 0; i < dayNames.length; i++) {
    let th = document.createElement('th');
    th.appendChild(document.createTextNode(dayNames[i]))
    trHead.appendChild(th)
}

let k = 1;
let tr = document.createElement('tr');
let td = document.createElement('td');
let daysInMonth = moment().daysInMonth()
let startOfMonth = moment().startOf('month').format('dddd')

table.appendChild(tr);


while (k <= daysInMonth) {
    let dayName = moment(new Date(a, b, k)).format('dddd')

    console.log('')


    switch (k) {
        case 1:
            for (let i = 0; i < dayNames.length; i++) {

                if (startOfMonth !== dayNames[i]) {
                    let td = document.createElement('td');
                    tr.appendChild(td)
                } else {
                    let td = document.createElement('td');
                    td.innerText = '1'
                    tr.appendChild(td)
                    break;
                }
            }
            break;
        default:

            let td = document.createElement('td');
            td.innerText = k;
            tr.appendChild(td)

            if (dayName === "Monday") {
                let tr = document.createElement('tr');
                let td = document.createElement('td');
                table.appendChild(tr);
                td.innerText = k;
                tr.appendChild(td)
            }
            break;
    }

    k++;

}
