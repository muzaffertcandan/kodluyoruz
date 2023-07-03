// let greeting = document.querySelector("#greeting")
// greeting.addEventListener("click", domClick)
// //hover için "mouseover" eventi gibi W3 den bakabilirsin

// function domClick(){
//     console.log("tıklandı");
//     this.style.color == "red" ? this.style.color = "black" : this.style.color = "red"; 
//     counter = counter + 1
//     this.innerHTML = `Bu yazıya ${counter} kere tıklandı.`
// }

let counterInner = document.querySelector("#counter") 
let increase = document.querySelector("#increase")
let decrease = document.querySelector("#decrease")
let counter = 0

counterInner.innerHTML = counter

increase.addEventListener("click", clickEvent)
decrease.addEventListener("click", clickEvent)

function clickEvent(){
    console.log(this.id);
    this.id == "increase" ? counter += 1 : counter -= 1
    counterInner.innerHTML = counter
}


// let counter;
// increase.addEventListener("click", increaseEvent)
// decrease.addEventListener("click", decreaseEvent)

// counter = parseInt(counterInner.innerHTML)

// function increaseEvent(){
//     counter = counter + 1
//     console.log(counter);
//     counterInner.innerHTML = counter
// }

// function decreaseEvent(){
//     counter = counter - 1
//     console.log(counter);
//     counterInner.innerHTML = counter
// }