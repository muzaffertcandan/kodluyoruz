
let email = "muzaffercandan@gmail.com"
let firstName = "MUzaffer"
let lastName = "Candan"
let idNumber = 123
const DOMAIN = email.slice(email.search("@") + 1)


//length
console.log(email.length);

//ilk karakter
console.log(firstName[0]);
console.log(firstName.charAt(0));

//buyuk harf kucuk harf yapma
// firstName = firstName.toUpperCase()
console.log(firstName);

firstName = firstName.toLowerCase()
console.log(firstName);

//string içindeki bilgiyi aramak search:
console.log(email.search("@"));
console.log(email[14]);
//olmayan bir şeyi bulmaya çalışırsak -1 gelir
console.log(email.search("olmayan"));

//belli bir yere kadar almak
console.log(email.slice(0,8)); //isim kısmı
console.log(email.slice(14)); //domain kısmı
// @ ve @ den sonra gelen kısmı alıyor, +1 ile @ i atlıyor
console.log(DOMAIN);

// domain de nokta nerde var bulmak için
console.log(DOMAIN.indexOf("."));
console.log(DOMAIN.slice(0,5));
console.log(DOMAIN.slice(0,DOMAIN.indexOf("."))); //sadece gmail kısmını aldık

console.log();
// bilgiyi değiştir ----> replace
let myMail = email.replace('gmail.com', 'candan.com')
console.log(myMail);
// bir stringin içinde bir şey var mı aramak için includes
// includes true false döner
console.log(email.includes("@"));
// neyle bittiğine bakmak için true false döner
console.log(email.endsWith("com"));

//ilk harflerini büyük yapmak
//test
firstName = "firstname"
lastName = "lastname"

fullName = `${firstName[0].toUpperCase()}${firstName.slice(1,firstName.length).toLowerCase()} ${lastName.toUpperCase()}`
console.log(fullName);

let url = "www.kodluyoruz.org";
let language = "Java";

// let myUrl = url.slice(url.indexOf("k"))
let myUrl = url.slice(url.search("k"))
console.log(myUrl);

language = language.replace("Java", "Javascript")
console.log(language);
