
let fullName = prompt("lütfen adınızı giriniz")

let greeting = document.querySelector("#greeting")
console.log(fullName);
greeting.innerHTML = `${greeting.innerHTML} <small style="color:red">${fullName}</small>`