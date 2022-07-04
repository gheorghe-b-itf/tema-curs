
let arr = []

obj = {
    init: function () {
        axios
            .get('https://api.spacexdata.com/v4/crew')
            .then(function (response) {
                // success
                data = response.data
                console.log(data)

                for (let i = 0; i < data.length; i++) {

                    let content = document.getElementById("#")
                    let div = document.createElement('div')
                    let img = document.createElement('img');
                    let name = document.createElement('h5');
                    div.classList.add('divClass')
                    content.appendChild(div)
                    div.appendChild(name)
                    div.appendChild(img);
                    img.src = data[i].image;
                    name.innerHTML = data[i].name;

                }
                
            
            })
            .catch(function (error) {
                // error
                console.log(error);
            })
}
}

obj.init()