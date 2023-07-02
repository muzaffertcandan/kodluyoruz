// /* Temel kurallar
// 1- fonksiyon bir veya birden fazla parametre alabilir
// 2- bir fonksiyon dışarı bilgi gönderebilir veya göndermeyebilir
// 3- mümkünse fonksiyonun bağımlılıklarını azaltmak gerekir 
// */

// //buradaki değişkendir
// let firstName = "muzaffer";
// let lastName;

// function greetings(firstName="", lastName){ //buradaki firstName ponksiyonun parametresidir ve farklıdır
//     console.log(`Merhaba ${firstName ? firstName : ""}`);
//     console.log(`Merhaba ${firstName} ${lastName}`);

// }// default parametre alıyor

// //burda değişkeni çağırıyoruz parametreyi değil
// console.log(firstName); //degisken

// greetings() //fonksiyona parametre göndermedik
// greetings("parametre") //parametre gönderdik

// function greetings2(firstName, lastName){
//     let info = `Merhaba ${firstName} ${lastName}`
//     return info;
// }

// let greetingsInfo = greetings2("ad", "soyad")
// //  let info = "deneme"
// console.log(greetingsInfo);

// function domIdWriteInfo(id, info){
//     let domObject = document.querySelector(`#${id}`)
//     domObject.innerHTML = info
// }

// let htmlInfo = `<span style="color: red">Color RED</span>`

// domIdWriteInfo('greeting', htmlInfo)
// domIdWriteInfo('info', greetings2("lorem", "picsum"))

//  //recursive function
// function factorial(n){
//     if(n == 1){
//         return 1;
//     }

//      else if(n > 1){
//         console.log("işlemin içi: ",n);
//         return  n*  factorial(n-1) ;
//     }
//     return n;
// }

// console.log(factorial(4));
function Question(hobby) {
    switch (hobby) {
      case "car":
        return function (name) {
          console.log(name + " do you have a car ?");
        };
        break;
  
      case "book":
        return function (name) {
          console.log(name + " what is your favorite author?");
        };
        break;
  
      case "software":
        return function (name, type) {
          console.log(name + " are you interested in " + type + "?");
        };
        break;
  
      default:
        return function (name) {
          console.log(name + "  how are you ?");
        };
        break;
    }
  }
  
  var softwareQuestion = Question("software");
  softwareQuestion("Cemre","nodejs");
  
  