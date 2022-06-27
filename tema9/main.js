
let a = 2021
let b = 6
let c = 1
let date = ''

new Date(a, b, c)

for (new Date(a, b, c); new Date(a, b, c) < new Date(); c += 6) {

    date = new Date(a, b, c)
    console.log(new Date(a, b, c))
    
    let scopeDate = document.createTextNode(date)
    document.getElementById("this").appendChild(scopeDate)

    let br = document.createElement('br')
    document.getElementById("this").appendChild(br)

}