let items = [1, 2, 3, 4, 5];

let femaleUsers = ["ayse", "hulya", "fatma"];
let maleUsers = ["ahmet", "faruk", "ata"];

items.unshift(femaleUsers);
console.log(items);

items.push(maleUsers);
console.log("male + female", items); //bu şekilde array içine array yerleştirmiş olduk

console.log(items.length); //cevap 7
console.log(items[0][1]); // 0 ıncı elemanın 1. elemanı yani ayse
console.log("0 ıncı elemanın eleman sayısı", items[0].length); // 0 ıncı elemanın eleman sayısı
//array içinden öge ayırmak
let newItems = items.splice(2, 4); //2 den başlasın 3 tane olsun
console.log("new items", newItems);

console.log("items", items);

//array içindeki ögenin index bilgisinin alınması
items.unshift("lorem");
items.push("ipsum");

console.log(items.indexOf("ipsum"));

// array kopyalamak (slice ile)

let copyItems = items; //items arrayini copyitems ın içerisine tekrar kopyalamıyor
console.log("myitemss", items);

copyItems.pop(); // son ogeyi cıkarttık
console.log("copy items", copyItems);
console.log("items", items);

console.log("kopyalamadan sonra");
copyItems = items.slice() // slice ile kopyalama yaptık
copyItems.pop(); // son ogeyi cıkarttık
console.log("copy items", copyItems);
console.log("items", items);

let es6Items = [...items]
items.pop()
console.log("es6 öncesi",items);
console.log("es6 ile",es6Items);

let allUsers = [...femaleUsers, ...maleUsers] //es6 array yapısı birleştirme
console.log(allUsers);

//array içindeki bilgiyi string yapmak
console.log(allUsers.toString());
console.log(allUsers.join(" -- "));

//istenilen array bilgisine öge ekleme -> splice(index, 0, value)

allUsers.splice(allUsers.length ,0 , "Melissa")
console.log(allUsers);
allUsers.splice(Math.floor(allUsers.length/2) ,0 , "muzafffferr")
console.log("lastt", allUsers);

// let nums = [2,3,9,6,7,8]
// let copyNums = nums.slice()
// nums = nums.sort()
// nums = Array.from(nums);
// let s = 1
// let n = nums[nums.length-s]
// greatest();
// function greatest(){

    
    
//     if (nums[nums.length-s] == n ){
//         s += 1
//         greatest();
//     }

//     if( n > nums[nums.length-s]){
//         n = nums[nums.length-s]
//         console.log(n);
//         console.log(copyNums);        
//     }

    
// }