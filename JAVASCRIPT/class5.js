// document.querySelector("#sample").innerHTML = "DOM manipulated with query selector";
// document.querySelectorAll("div")[3].innerHTML = "another Dom manipulated by querySelectorAll";

let firstClass = document.querySelector(".test");
let allDiv = document.querySelectorAll("div");

firstClass.style.color = "red";
firstClass.style.paddingLeft = "30px";

// classList
// add, remove, toggle, contains (can use this to manipulate classes)

// document.querySelector("body").classList.add("dark-mode");

// let thy = document.getElementsByClassName("test")[2];

// if (thy.classList.contains("test")) {
//     alert("test is present");
// } else {
//     alert("test is absent");
// }

function sayHi() {
    alert("An event has occurred");
}

let Hello = document.getElementById("sample");

// Hello.addEventListener("click", function () {
    // alert("An event has occured");
// });

Hello.addEventListener("click", SayHi);