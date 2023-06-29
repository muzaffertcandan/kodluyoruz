// liste  içerisindeki son elemana ulaşmak veya eklemek

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.innerHTML = "son oge degisti"

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.innerHTML = "ilk oge degisti"

let ulDom = document.querySelector("ul#list")
let liDom = document.createElement("li")
 
liDom.innerHTML = "kendi ögemiz"
// en sona ekler
// ulDom.append(liDom)
ulDom.prepend(liDom)