// let app = angular.module("app", []);
//
// let input = document.getElementById("arg-text");
//
// let arg = "";
//
// input.addEventListener("keyup", function (event) {
//     if (event.keyCode === 13) {
//         event.preventDefault();
//         arg = input.value;
//         let argSplit = arg.split(" ");
//         let simulatedDelay = Math.floor(Math.random() * 3) * 1000;
//
//         let currentDirectory = "root";
//         if (sessionStorage.getItem("currentDirectory") != null) {
//             currentDirectory = sessionStorage.setItem("currentDirectory", "root");
//         }
//
//         document.createElement("br");
//         setTimeout((key, value) => {
//             if (argSplit[0] === "port" && argSplit[1] === "help"){
//                 alert("Help Post");
//                 console.log("viewed help post")
//
//             } else if (argSplit[0] === "port") {
//                 alert("Port")
//                 console.log("viewed port intro")
//
//             } else if (argSplit[0] === "ls" && currentDirectory === "root") {
//                 alert("root")
//
//             } else if (argSplit[0] === "ls" && currentDirectory === "css") {
//                 alert("css")
//
//             } else if (argSplit[0] === "ls" && currentDirectory === "js") {
//                 alert("js")
//
//             } else if (argSplit[0] === "cd" && argSplit[1] === "js") {
//                 alert("js")
//                 currentDirectory = "js";
//                 sessionStorage.setItem("currentDirectory", currentDirectory)
//
//             } else if (argSplit[0] === "cd" && argSplit[1] === "css") {
//                 alert("css");
//                 currentDirectory = "css";
//                 sessionStorage.setItem("currentDirectory", currentDirectory);
//
//             } else{
//                 alert(argSplit[0] + " not recognized");
//                 console.log("command not recognized");
//
//             }}, simulatedDelay);
//
//         let newTxt = document.createElement("p")
//         newTxt.style.color = "#FFFFFF";
//         let s = document.createTextNode("arg");
//         newTxt.appendChild(s)
//
//
//     }
// })

// import {Terminal} from "xterm";

let terminal = new Terminal()
terminal.open(document.getElementById("terminal"))
terminal.write("github.io > ")