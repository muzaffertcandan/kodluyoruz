
//counterı set ettik
let counter = localStorage.getItem("counter") ? Number(localStorage.getItem("counter")): 0
let counterInner = document.querySelector("#counter") 
let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")

counterInner.innerHTML = counter

increase.addEventListener("click", clickEvent)
decrease.addEventListener("click", clickEvent)

function clickEvent(){
    this.id == "increase" ? counter += 1 : counter -= 1
    //counter içindeki bilgiyi alıp kullandık
    localStorage.setItem("counter", counter)
    counterInner.innerHTML = counter
}