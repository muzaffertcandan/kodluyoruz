//boolean

// 0 ve 1 anlamı
let isActive = false // 0
isActive = true // 1

// boolean içine boş veri gönderilirse 0 erilir
let userName;
let isUserName = Boolean(userName)

console.log(isUserName); // 0 gelir çünkü user name içi boş tanımlanmış

Boolean("11") //true
Boolean("0") //true
Boolean("") //false

userName = "user"
console.log("User name: ", Boolean(userName));
// 0 , -0 , null, false ,NaN, undefined, ("") BUNLARIN HEPSİ FALSE GELİR
// bilgi olup olmadığını boolean ile kontrol edebiliriz
console.log(Boolean(NaN));

// soru tipi

console.log(Boolean(0 == 0)); //true dur

console.log(Boolean(userName.length > 0));