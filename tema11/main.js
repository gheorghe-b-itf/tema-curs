

// incercam sa spargem problema in mini probleme multiple
// indentificam urmatoarele probleme:
// 1. vrem sa desenam 1 singura luna, cu zilele saptamanii, in functie de luna si anul dorit
// 2. vrem sa aflam lansarile, doar in functie de luna si anul dorite
// 3. vrem sa punem cercuri doar pentru lansarile din luna si anul dorite
// 4. butoane de prev si next care, odata apasate, scad sau cresc (cu moment) cate o luna la sursa noastra de adevar care este: luna si anul dorite
// 5. avem nevoie de un popup, aratat la click-ul pe un cerc de lansare, cu informatiile corecte (folositi data-* attribute)

// NOTA: puteti aborda schimbarea lunii curente in felul urmator:
// folositi luna si anul din structura de memorie ca simpli integeri pe care ii adunati sau scadeti dupa caz
// in functiile care trebuie sa deseneze, ba saptamani in tabel, ba cercuri ind reptul lansarii
// veti lua acest an si luna si veti crea un moment nou, in functie de care desentati in pagina ce e de desenat


// home work fixes next steps:
// 1. make sure that in the changeCalendar file, you also increment or decrement the year
// 2. copy with copy/paste, from our main project, the getLaunchesForMonthAndYear function and use it
// 3. in the places where you wanted to encircle the current day, encircle all days that you get at step #2
// 4. maybe resolve the issue with having the if inside the while... you can do a for and a while
// in order to put in place the empty cells with the for

let obj = {
    allDataLauches: [],
    dataLauches: {
        name: [],
        date_utc: [],
        details: [],
        youtubeLink: []
    },
    selectedMonth: {
        month: moment().month() + 1, // initializam asta cu luna curenta pe care ne-o da moment
        year: moment().year() // initilizam cu anul curent
    },
    init: function () {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(function (response) {
                // success
                obj.allDataLauches = response.data;

                console.log(obj)
                for (let i in obj.allDataLauches) {
                    obj.dataLauches.name = obj.allDataLauches[i].name
                    // date.push(obj.allDataLauches[i].date_utc)
                    obj.dataLauches.details.push(obj.allDataLauches[i].details)
                    obj.dataLauches.youtubeLink.push(obj.allDataLauches[i].links.webcast)

                }
            })
            .catch(function (error) {
                // error
                console.log(error);
            })
        ;
    }
};
obj.init();

console.log(obj)

let createDynamicCalendar = function (selectedMonth) {

    //create a Date obj that I can modify as I need
    // let curentDateArr = moment(new Date()).format("ddd DD M YYYY").split(' ')
    let curentDateArr = moment()
        .year(selectedMonth.year)
        .month(selectedMonth.month - 1)
        .startOf('month')
        .format("ddd DD M YYYY")
        .split(' ')
    ;
    let year = curentDateArr[3];
    let month = curentDateArr[2] - 1;
    let day = curentDateArr[1];
    let date = new Date(year, month, day);

    //create a dynamic title of calendar
    let dateWrapper = moment(date)._d.toString()
    document.querySelector('.title>h1').innerText = moment(new Date(dateWrapper)).format("MMMM")

    document.querySelector('.prevMonth').innerHTML = moment(new Date(dateWrapper)).subtract(1, 'months').format("MMMM")
    document.querySelector('.nextMonth').innerHTML = moment(new Date(dateWrapper)).add(1, 'months').format("MMMM")


    //create header of calendar 
    let dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
    let gridHeader = document.querySelector('.grid-header')
    gridHeader.innerHTML = '';

    for (let i = 0; i < dayNames.length; i++) {
        let divHead = document.createElement('div');
        divHead.appendChild(document.createTextNode(dayNames[i]))
        gridHeader.appendChild(divHead);
        divHead.classList.add("itemHead");
    }

    //create the actual container of calendar
    let k = 1;
    let divContainer = document.querySelector('.grid-container');
    divContainer.innerHTML = '';
    let daysInMonth = moment(new Date(dateWrapper)).daysInMonth()
    let startOfMonth = moment(new Date(dateWrapper)).startOf('month').format('dddd')
    let curentDay = moment(new Date(dateWrapper))


    while (k <= daysInMonth) {
        if (k === 1) {
                for (let i = 0; i < dayNames.length; i++) {

                    
                        // console.log(obj.dataLauches.date_utc)
                        // let isCircledDay = false;
                        // for (let j = 0; j < obj.dataLauches.date_utc.length; j++) {
                        //     let launchItem = obj.dataLauches.date_utc[j];
                        //     let itemDateString = launchItem.split('T')[0];
                        //     let itemDay = itemDateString.split('-')[2];
                        //     if (parseInt(itemDay) === i) {
                        //         isCircledDay = true;
                        //         divItem.classList.add("curentDay");
                        //     }
                        // }
                        

                    if (startOfMonth !== dayNames[i]) {
                        let divItem = document.createElement('div');
                        divItem.classList.add("itemCalendar");
                        divContainer.appendChild(divItem);

                    } else {
                        let divItem = document.createElement('div');
                        divItem.innerText = '1'
                        divContainer.appendChild(divItem);
                        // if (curentDay._d.toString() == moment(new Date(year, month, k))._d.toString()) {
                        //     divItem.classList.add("curentDay");

                        // } else {
                            divItem.classList.add("itemCalendar");
                        // }

                        break;
                    }
                }
                // break;
        } else {

                // let isCircledDay = false;
                // for (let j = 0; j < obj.dataLauches.date_utc.length; j++) {
                //     let launchItem = obj.dataLauches.date_utc[j];
                //     let itemDateString = launchItem.split('T')[0];
                //     let itemDay = itemDateString.split('-')[2];
                //     if (parseInt(itemDay) === i) {
                //         isCircledDay = true;
                //         divItem.classList.add("curentDay");
                //     }
                // }

                let divItem = document.createElement('div');
                divItem.innerText = k;
                divContainer.appendChild(divItem);

                // if (curentDay._d.toString() == moment(new Date(year, month, k))._d.toString()) {
                //     divItem.classList.add("curentDay");

                // } else {
                    divItem.classList.add("itemCalendar");
                // }

                // break;
        }
        k++;
    }

    
}

createDynamicCalendar(obj.selectedMonth);

