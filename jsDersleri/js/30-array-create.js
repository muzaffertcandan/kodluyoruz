// dizilerle çalışmak

let DOMAIN = "muzafferrc.com";
let isActive = false;
let items = [21, 25, 13, isActive, DOMAIN];
let myItem = [1 , 2]

let emptyArray = []

//array eleman sayısı öğrenmek
//console.log(items.length); // array içi öge sayısı
items = [1,2,isActive,4,DOMAIN]
console.log("öge sayısı items",items.length);
console.log("öge sayısı",myItem.length);
console.log("ortanca bulma",items[Math.floor(items.length/2)]);//ortanca ögeyi ekrana yazdırma(floor ile sayımız tek ise üst değeri alıyor)
// document.querySelector("#info").innerHTML = items.length
//ilk eleman tutulması items[0]
console.log(items[0]);
//son elemana ulaşılması
console.log(items[5-1]);
console.log(items[items.length-1]);

//değişkenin array olup olmadığı kontrolü
console.log(
    typeof(items) // çıktısı object
);

console.log(
    Array.isArray(items)
);

// hangi isArrayler true verir
console.log(
    "[]",
    Array.isArray([])
);
console.log(
    "1",
    Array.isArray(1)
);
console.log(
    "true",
    Array.isArray(true)
);

//array in ortasındaki elemanı çağırmak

console.log(
    "ortadaki",
    items[Math.floor(items.length/2)]
);
console.log(
    items[ Math.floor(myItem.length/2)]
);