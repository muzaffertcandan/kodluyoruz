const PRODUCTS = ["laptop", "bmw", "araba", "yol", "köprü", "PC", "MOUSE", "uzun ürünn"];
//FİLTER
// 5 harften fazla olanları istiyor
const NEW_PRODUCTS = PRODUCTS.filter(item => item.length>5)
console.log(NEW_PRODUCTS);


const USERS = [
  { fullName: "Muaffer Candan", isActive: true },
  { fullName: "lrem ipsm", isActive: false },
  { fullName: "hey brother", isActive: true },
  { fullName: "deneme isim4", isActive: false },
];

const ACTIVE_USERS = USERS.filter(user => user.isActive)

console.log(ACTIVE_USERS);
const myArr = ["Javascript","hey bro","java"]
const person = [{
    name: "Adem",
    age: 25,
    languages: ["JavaScript", "CSS"],
    },
    {
    name: "Oğuz",
    age: 33,
    languages: ["Java", "HTML"],
      }
    ];

const OLD_PERSON = person.filter(myItem => myItem.age>30)

console.log(OLD_PERSON);
let content = "Javascript"
const WISE_MAN = person.filter(item => item.languages.includes("JavaScript"))
WISE_MAN.forEach(item => {
    console.log(`Js bilen bilge kişi ${item.name} ve sadece ${item.age} yaşında`);
})
console.log(WISE_MAN);