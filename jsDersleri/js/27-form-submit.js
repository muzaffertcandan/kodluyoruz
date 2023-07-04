// #form submit
// post işlemi get işlemine göre daha güvenli sayılabilir
let formDOM = document.querySelector("#user-form")
formDOM.addEventListener("submit", formSubmit)

 function formSubmit(event){
    //default işlemi yapmamasını sağlıyor preventDefault()
    event.preventDefault() // default işlemi engelledik
    console.log("işlem");
 }