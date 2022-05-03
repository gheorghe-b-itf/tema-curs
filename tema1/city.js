console.log("My city is IASI")
function myFunction() {
    let person = prompt("Please enter your name");
    if (person != null) {
        document.getElementById("name").innerHTML =
        `Hello ${person}! I'm Gheorghe! Here is the town that I live in:`;
    }
    else{
        document.getElementById("name").innerHTML =
        "Hello! I'm Gheorghe! Here is the town that I live in:";
    }
}

myFunction();