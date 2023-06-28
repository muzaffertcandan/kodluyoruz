
let userName = "muzaffertcandan"
let domainName = "mttcandan.com"

let email = userName + "@" + domainName;
// console.log(
//     "Merhaba sitemize hoş geldin", userName,  "mail adresin: ",email
// );

let info = `Merhaba ${userName} web siteme hoşgeldinnnn... mail adresin: ${email}
mail adresinin uzunluğu: ${email.length} karakter
borcunuz: ${ (5+3)*8 } TL
Günün saat bilgisi ${new Date().getHours()  }:${new Date().getMinutes()}.${ new Date().getMinutes()}
kısa isminiz: ${userName[0]}.

`

console.log(info);