let userName = prompt("Kullanıcı adı Giriniz")
let info = document.querySelector("#info")

//ternary kullanımı
// kosul ? dogruysa : yanlissa 

// info.innerHTML = `${userName.length > 0 ? userName:"kullanıcı bilginiz bulunamadı."} `
// bu daha doğru kullanım
info.innerHTML = `${userName ? userName:"kullanıcı bilginiz bulunamadı."} `

let boolean;

const isBooleanTrue = boolean ? true : false;

console.log(isBooleanTrue)
>> false

console.log(boolean)