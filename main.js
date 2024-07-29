// local Storage vs Session Storage

// const name = prompt("ismingizni kriting")

// localStorage.setItem("name", "muhammadali" )

// let malumotOlish = localStorage.getItem("name")

// console.log(malumotOlish);


// const userName = prompt("ism kirit")
// localStorage.setItem("GroupName", JSON.stringify(userName));
// const malumotOlish = JSON.parse(localStorage.getItem("GroupName"));
// console.log(malumotOlish);



let input = document.querySelector("input");
let btn = document.querySelector(".button");
let text = document.querySelector(".userText");
let form = document.querySelector(".form");



document.addEventListener("DOMContentLoaded", function () {
    let savedName = localStorage.getItem("name");
    if (savedName) {
        text.textContent = savedName;
    }
});

form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    localStorage.setItem("name", input.value);
    input.value = "";
    text.textContent = localStorage.getItem("name");
});
