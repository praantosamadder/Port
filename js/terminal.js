const input = document.getElementById('terminal-input')

// CONSTANTS
const helpString = "--help goes here";
const name = "Praanto Samadder";
const listProject = "--list-project output goes here";
const defaultOutputHelpString = "This is the help string. Customize it later.";

let divTagTerminalLine = document.getElementById("terminal-line");

// noinspection JSUnusedGlobalSymbols
function returnsFocusToTerminalInput(){
    input.focus()
}

let iterator = 0;
let lastInput = "";

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault()
        // iterator++
        document.getElementById(terminalOutputIdGenerator(0)).style.display = "block";
        validator(input.value)
        input.value = ""
    }
})


function validator(args) {
    const argumentSplit = args.split(" ")
    let value = input.value
    if (argumentSplit[0] === "port"){
        switch (argumentSplit[1]) {
            case "--help": {
                println(value, helpString);
                break;
            } case "--list-projects": {
                println(value, listProject);
                break;
            } case "--name": {
                println(value, name);
                break;
            } default: {
                println(value, defaultOutputHelpString);
            }
        }
    } else println(value,"Error")
}

function printlnOutput(str) {
    alert(str)
}

function dollaSignIdGenerator(iterator) {
    const baseId = "dolla-sign-";
    return baseId + (iterator).toString()
}

function terminalOutputIdGenerator(iterator) {
    const baseId = "terminal-output-"
    return baseId + iterator.toString()
}

function terminalInputTextIdGenerator(iterator) {
    const baseId = "terminal-input-"
    return baseId + iterator.toString()
}

function initialization() {
    // CREATES A NEW DOLLA SIGN INSIDE terminal-line DIV TAG
    let p = document.createElement("p");
    p.className = "dolla-sign";
    p.id = dollaSignIdGenerator(iterator);
    p.appendChild(document.createTextNode("$~ "))
    divTagTerminalLine.appendChild(p);

    // CREATE A NEW TERMINAL INPUT TEXT INSIDE terminal-line DIV TAG
    let p1 = document.createElement("p");
    p1.className = "terminal-input-text";
    p1.id = terminalInputTextIdGenerator(iterator);
    p1.appendChild(document.createTextNode(""));
    divTagTerminalLine.appendChild(p1);

    // CREATE A NEW TERMINAL OUTPUT TEXT INSIDE terminal-line DIV TAG
    let p2 = document.createElement("p");
    p2.className = "terminal-input-text";
    p2.id = terminalOutputIdGenerator(iterator);
    p2.appendChild(document.createTextNode(""));
    divTagTerminalLine.appendChild(p2);
}

initialization()

function println(value, msg) {
    let p1 = document.getElementById(terminalInputTextIdGenerator(iterator))
    p1.appendChild(document.createTextNode(value));

    let p2 = document.getElementById(terminalOutputIdGenerator(iterator))
    p2.appendChild(document.createTextNode(msg))

    // CREATE NEW P TAG AND SHIT
    iterator++

    let p4 = document.createElement("p")
    p4.className = "terminal-input-text";
    p4.id = terminalInputTextIdGenerator(iterator);
    p4.appendChild(document.createTextNode(""));
    p4.style.display = "block"
    divTagTerminalLine.appendChild(p4);

    let p5 = document.createElement("p");
    p5.className = "terminal-input-text";
    p5.id = terminalOutputIdGenerator(iterator);
    p5.appendChild(document.createTextNode(""));
    p5.style.display = "block"
    divTagTerminalLine.appendChild(p5);

    // let p4 = document.createElement("p");
    // p4.className = "terminal-input-text";
    // p4.id = terminalInputTextIdGenerator(iterator);

}

function onEnterClicked() {

}
