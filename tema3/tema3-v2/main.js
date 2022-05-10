let content = document.getElementById('root');
let p1 = () => {
    let p1Element = document.createElement('p');
    p1Element.innerHTML = 'Jane Smith has $12,450 in her bank account.';
    content.appendChild(p1Element);
    console.log(p1Element);
}
let p2 = () => {
    let p2Element = document.createElement('p');
    p2Element.innerHTML = '$12,450 is a lot of money.';
    content.appendChild(p2Element);
    console.log(p2Element);
}

let p3 = () => {
    let p3Element = document.createElement('p');
    p3Element.innerHTML = 'Jane Smith plans to buy a Toyota Yaris.';
    content.appendChild(p3Element);
    console.log(p3Element);
}

let p4 = () => {
    let p4Element = document.createElement('p');
    p4Element.innerHTML = 'Jane Smith will use her $12,450 to buy a Toyota Yaris.';
    content.appendChild(p4Element);
    console.log(p4Element);
}

let p5 = () => {
    let p5Element = document.createElement('p');
    p5Element.innerHTML = '$12,450 is a lot of money for a Toyota Yaris.';
    content.appendChild(p5Element);
    console.log(p5Element);
}

let p6 = () => {
    let equalLine = document.createElement('p');
    equalLine.innerHTML = '=============================================';
    content.appendChild(equalLine);
    console.log(equalLine);
}

let breaK = () => {
    let br = document.createElement('br');
    content.appendChild(br);
    console.log('')
}

p1();
p2();
p3();
p4();
p5();
breaK();
p6();
breaK();
p2();
p5();
p3();
p1();
p4();
breaK();
p6();
breaK();
p3();
p5();
p4();
p1();
p2();
