// write the time to the screen
let time = document.getElementById("current-time");
let now = new Date();

setInterval(() => {
  let now = new Date();
  time.innerHTML = now.toLocaleTimeString();
}, 1000);

time.innerHTML = now.toLocaleTimeString();

//take an name input for show it on the screen

let name1 = prompt("Lütfen adınızı Giriniz");
myName = document.querySelector("#myName");
greetings = document.querySelector("#greetings")

if (name1) {
  myName.innerHTML = `${name1}`;
} else if (!name1) {
  greetings.innerHTML = `KİMSİN SEEEEEEN F5 AT YENİ İSİM YAZ`;
}
