// #form submit
// post işlemi get işlemine göre daha güvenli sayılabilir
// inputun name bilgisi kesinlikle olmalı yoksa form çalışmaz

let formDOM = document.querySelector("#user-form");
formDOM.addEventListener("submit", formSubmit);

function formSubmit(event) {
  //default işlemi yapmamasını sağlıyor preventDefault()
  event.preventDefault(); // default işlemi engelledik
  console.log("işlem gerçekleşti");
  let scoreInputDOM = document.querySelector("#score");
    console.log(scoreInputDOM.value);
    localStorage.setItem("score", scoreInputDOM.value)
}
