let userName = prompt("Kullanıcı adı Giriniz")
let info = document.querySelector("#info")

//ternary kullanımı
// kosul ? dogruysa : yanlissa 
info.innerHTML = `${userName.length > 0 ? userName:"kullanıcı bilginiz bulunamadı."} `