
// let title = document.getElementsByTagName("h2")
// id si title olan div in içerisindeki stringi değiştirdik
let title=  document.getElementById("title")
title.innerHTML = "deneme"
console.log(title.innerHTML);
//ikisi de kullanılabilir
let link = document.querySelector("#myLink")
// let link = document.querySelector("ul#list>li>a")
link.innerHTML += "değişti"
link.style.color = "red"
link.classList.add("btn")
// console.log(link.innerHTML);
