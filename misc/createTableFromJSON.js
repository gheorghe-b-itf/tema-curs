function CreateTableFromJSON() {
    var e = JSON.parse(document.getElementById('json2table').innerHTML);
    console.log(e);
    for (e, o = [], r = 0; r < e.length; r++)
        for (var t in e[r])-1 === o.indexOf(t) && o.push(t);

    var n = document.createElement("table"), a = n.insertRow(-1);
    for (r = 0; r < o.length; r++) {
        var i = document.createElement("th");
        i.innerHTML = o[r], a.appendChild(i)
    }
    for (r = 0; r < e.length; r++) {
        a = n.insertRow(-1);
        for (var c = 0; c < o.length; c++) {
            a.insertCell(-1).innerHTML = e[r][o[c]]
        }
    }
    var l = document.getElementById("showData"); 
    n.setAttribute('id', 'tab'); l.innerHTML = "", l.appendChild(n) 
}