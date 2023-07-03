// dom events
let greeting = document.querySelector("#greeting")
greeting.addEventListener("click", domClick)
//hover için "mouseover" eventi gibi W3 den bakabilirsin
let counter = 0

function domClick(){
    console.log("tıklandı");
    this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"; 
    counter = counter + 1
    this.innerHTML = `Bu yazıya ${counter} kere tıklandı.`
}
