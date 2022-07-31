
obj = {
    allDataLauches: [],
    dataLauches: {
        name: [],
        date_utc: [],
        details: [],
        youtubeLink: []
    },
    init: function () {
        axios
            .get('https://api.spacexdata.com/v4/launches')
            .then(function (response) {
                // success
                obj.allDataLauches = response.data;

            })
            .catch(function (error) {
                // error
                console.log(error);
            })
            ;
        console.log(obj)
        for (let i in obj.allDataLauches) {
            obj.dataLauches.name = obj.allDataLauches[i].name
            date.push(obj.allDataLauches[i].date_utc)
            obj.dataLauches.details.push(obj.allDataLauches[i].details)
            obj.dataLauches.youtubeLink.push(obj.allDataLauches[i].links.webcast)

        }
    }
}
obj.init();

console.log(obj)

let createDynamicCalendar = function () {

    //create a Date obj that I can modify as I need
    let curentDateArr = moment().format("ddd DD M YYYY").split(' ')
    let a = curentDateArr[3];
    let b = curentDateArr[2] - 1;
    let c = curentDateArr[1];
    let date = new Date(a, b, c);

    //create a dynamic title of calendar
    let dateWrapper = moment(date)._d.toString()
    let title = document.querySelector('.title>h1').innerText = moment(new Date(dateWrapper)).format("MMMM")

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
    let curentDay = moment(new Date(dateWrapper)).format("D")


    while (k <= daysInMonth) {

        // let launchDate = moment(new Date()).format("YYYY MMMM D")
        switch (k) {
            case 1:   //create the starting point of calendar
                for (let i = 0; i < dayNames.length; i++) {

                    
                    if (startOfMonth !== dayNames[i]) {
                        let divItem = document.createElement('div');
                        divContainer.appendChild(divItem);
                        divItem.classList.add("itemCalendar");

                    } else {
                        let divItem = document.createElement('div');
                        divItem.innerText = '1'
                        divContainer.appendChild(divItem);
                        if (curentDay == k) {
                            divItem.classList.add("curentDay");
                        } else {
                            divItem.classList.add("itemCalendar");
                        }

                        // if(launchDate == new Date(a,b,k)) {    //finding launch date
                        //     let divItemLaunch = document.createElement('div');
                        //     divItemLaunch.classList.add("itemLaunch");
                        //     return divItemLaunch;
                        // }
                        break;
                    }
                }
                break;
            default:

                let divItem = document.createElement('div');
                divItem.innerText = k;
                divContainer.appendChild(divItem);

                if (curentDay == k) {
                    divItem.classList.add("curentDay");
                } else {
                    divItem.classList.add("itemCalendar");
                }

                // if(launchDate == new Date(a,b,k)) {       //finding launch date
                //     let divItemLaunch = document.createElement('div');
                //     divItemLaunch.classList.add("itemLaunch");
                //     return divItemLaunch;
                // }
                break;
        }
        k++;
    }

}

createDynamicCalendar();