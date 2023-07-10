// array işlemlerinde foreach kullanmak daha mantıklı

const PRODUCTS = ["laptop", "bmw", "araba", "yol", "köprü","PC", "MOUSE"]

PRODUCTS.forEach((myproduct, index , array) => console.log(array[index] =`${myproduct.toUpperCase()}`))
console.log(PRODUCTS);


// const USER_LİST_DOM = document.querySelector("#user-list")

// for(index = 0; index < users.length; index++){
//     const liDom = document.createElement("li")
//     liDom.innerHTML = users[index]
//     USER_LİST_DOM.appendChild(liDom)
// }

const USER_LİST_DOM = document.querySelector("#user-list")
PRODUCTS.forEach((item)=>{
    const liDom = document.createElement("li")
    liDom.innerHTML = item
    USER_LİST_DOM.append(liDom)
})
