const terminalInput = document.getElementById('terminal-input')

// CONSTANTS
const helpString = "--help goes here";
const name = "Praanto Samadder";
const listProject = "--list-project output goes here";
const defaultOutputHelpString = "This is the help string. Customize it later.";

let terminalOutput = document.getElementById("terminal-output");

// noinspection JSUnusedGlobalSymbols
function terminalInputFocusOut(){
    terminalInput.focus()
}
let iterator = 0;

terminalInput.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault()
        terminalOutput.innerHTML = terminalInput.value;
        terminalOutput.appendChild(document.createElement("br"));
        let d = document.createTextNode(terminalInput.value + "$ ");
        validator(terminalInput.value);
        alert(idGenerator(iterator))
        iterator++
        terminalInput.value = "";
    }
})

function validator(arguments) {
    const argumentSplit = arguments.split(" ")
    if (argumentSplit[0] === "port"){
        switch (argumentSplit[1]) {
            case "--help": {
                printlnOutput(helpString);
                break;
            } case "--list-projects": {
                printlnOutput(listProject);
                break;
            } case "--name": {
                printlnOutput(name);
                break;
            } default: {
                printlnOutput(defaultOutputHelpString);
            }
        }
    }
}

function printlnOutput(str) {
    alert(str)
}

function idGenerator(iterator) {
    const baseId = "dolla-sign-";
    return baseId + (iterator).toString()
}
