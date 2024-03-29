window.obj = {
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

                for (let i in obj.allDataLauches) {
                    obj.dataLauches.name.push(obj.allDataLauches[i].name)
                    obj.dataLauches.date_utc.push(obj.allDataLauches[i].date_utc)
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
}
//    
obj.init();
console.log(obj)