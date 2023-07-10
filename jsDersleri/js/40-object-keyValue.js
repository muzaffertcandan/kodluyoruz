//suslu parantezler object
// koseli parantez array

// [key1: 1, key2: 2, key3: 3]
let laptop1 = {
  brand: "Apple",
  model: "MacBook Pro",
  "2kg": 2,
  modelName: "MacBook Pro 16gb",
};

console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model);
console.log(laptop1["2kg"]);
console.log(laptop1.modelName);

//doğru anahtar bilgisi oluşturmak

laptop1.brand = "lenovo"
laptop1["brand"] = "toshiba"
console.log(laptop1);

//yeni bilgi ekleme
laptop1.version = "10.1"
console.log(laptop1);

//anahtar bilgilerine ulaşmak
keys = Object.keys(laptop1)
console.log(keys);

keys.forEach(keyInfo => {
    console.log(keyInfo);
    console.log("laptoplu",laptop1[keyInfo]);
})
// for (const key in keys){
//     console.log(key);
// }

//value lara ulaşma
console.log(Object.values(laptop1));

let values = Object.values(laptop1)
values.forEach(value => {
    console.log("value",value);
})

let show = {
    showName:"How I Met Your Mother",
    characters:[
    {

  	name:"Ted",
  	age: 35,
  	job: ["Architect"]
  },
  {
  	name: "Robin",
  	age: 32,
  	job: ["News Anchor", "Pop-Star"]
  }
  ]
};

console.log(`${show.characters[1].name} ${show.characters[1].job[1]}`);
