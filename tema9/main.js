
let a = 2021
let b = 6
let c = 1
let date = ''

new Date(a, b, c)

for (new Date(a, b, c); new Date(a, b, c) < new Date(); c += 6) {

    date = new Date(a, b, c)
    console.log(new Date(a, b, c))
    let content = document.getElementById("this")
    let div = document.createElement('div')
    div.classList.add('divClass')
    
    let scopeDate = document.createTextNode(date.toDateString())
    div.appendChild(scopeDate)
    content.appendChild(div)

    let br = document.createElement('br')
    content.appendChild(br)

}