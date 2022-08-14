console.log(obj)

let createDynamicCalendar = function (month) {

    //create a Date obj that I can modify as I need
    let curentDateArr = moment(new Date()).format("ddd DD M YYYY").split(' ')
    let year = curentDateArr[3];
    month = curentDateArr[2] - 1;
    let day = curentDateArr[1];
    let date = new Date(year, month, day);

    //create a dynamic title of calendar
    let dateWrapper = moment(date)._d.toString()
    let title = document.querySelector('.title>h1').innerText = moment(new Date(dateWrapper)).format("MMMM")

    let prevMonthText = document.querySelector('.prevMonth').innerHTML = moment(new Date(dateWrapper)).subtract(1, 'months').format("MMMM")
    let nextMonthText = document.querySelector('.nextMonth').innerHTML = moment(new Date(dateWrapper)).add(1, 'months').format("MMMM")


    //create header of calendar 
    let dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let gridHeader = document.querySelector('.grid-header')

    for (let i = 0; i < dayNames.length; i++) {
        let divHead = document.createElement('div');
        divHead.appendChild(document.createTextNode(dayNames[i]))
        gridHeader.appendChild(divHead);
        divHead.classList.add("itemHead");
    }

    //create the actual container of calendar
    let k = 1;
    let divContainer = document.querySelector('.grid-container');
    let daysInMonth = moment(new Date(dateWrapper)).daysInMonth()
    let startOfMonth = moment(new Date(dateWrapper)).startOf('month').format('dddd')
    let curentDay = moment(new Date(dateWrapper))


    while (k <= daysInMonth) {
        switch (k) {
            case 1:   //create the starting point of calendar
                for (let i = 0; i < dayNames.length; i++) {

                    
                        console.log(obj.dataLauches.date_utc)
                        let isCircledDay = false;
                        for (let j = 0; j < obj.dataLauches.date_utc.length; j++) {
                            let launchItem = obj.dataLauches.date_utc[j];
                            let itemDateString = launchItem.split('T')[0];
                            let itemDay = itemDateString.split('-')[2];
                            if (parseInt(itemDay) === i) {
                                isCircledDay = true;
                                divItem.classList.add("curentDay");
                            }
                        }
                        

                    if (startOfMonth !== dayNames[i]) {
                        let divItem = document.createElement('div');
                        divContainer.appendChild(divItem);
                        divItem.classList.add("itemCalendar");

                    } else {
                        let divItem = document.createElement('div');
                        divItem.innerText = '1'
                        divContainer.appendChild(divItem);
                        if (curentDay._d.toString() == moment(new Date(year, month, k))._d.toString()) {
                            divItem.classList.add("curentDay");
                        } else {
                            divItem.classList.add("itemCalendar");
                        }

                        break;
                    }
                }
                break;
            default:

                obj.dataLauches.date_utc
                let isCircledDay = false;
                for (let j = 0; j < obj.dataLauches.date_utc.length; j++) {
                    let launchItem = obj.dataLauches.date_utc[j];
                    let itemDateString = launchItem.split('T')[0];
                    let itemDay = itemDateString.split('-')[2];
                    if (parseInt(itemDay) === i) {
                        isCircledDay = true;
                        divItem.classList.add("curentDay");
                    }
                }

                let divItem = document.createElement('div');
                divItem.innerText = k;
                divContainer.appendChild(divItem);

                if (curentDay._d.toString() == moment(new Date(year, month, k))._d.toString()) {
                    divItem.classList.add("curentDay");
                } else {
                    divItem.classList.add("itemCalendar");
                }

                break;
        }
        k++;
    }

    
}

let changeCalendar = function () {


    document.querySelector('.prevMonth').addEventListener("click", () => {
        month = month - 1;
        createDynamicCalendar()
    })

    document.querySelector('.nextMonth').addEventListener("click", () => {
        month = month + 1;
        createDynamicCalendar()
    })
}

changeCalendar();
createDynamicCalendar();

