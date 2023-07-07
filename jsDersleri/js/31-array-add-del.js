let items = [10, 20, 30, 40,];
console.log("items ilk hali", items);

// sona eleman ekleme "push"
items.push(50)

console.log(items);

//basa öge eklemek "unshift"
items.unshift(5)
console.log(items);

// son ögeyi çıkarmak
let lastItem = items.pop() // son elemanı lastItem a kaydetti
console.log("last item",lastItem);

console.log("items bilgisi",items);
//bastaki ogeyi cıkarmak
let firstItem = items.shift() // ilk elemanı firstItem a kaydetti
console.log("first item",firstItem);
console.log("items bilgisi",items);

// array içindeki bir ögenin bilgisinin değiştirilmesi
items[0] = 23
console.log(items);
//sonuncusunun değiştirilmesi
items[items.length-1] = 34
console.log(items);

// array de aralara boşluk koymak

// let nums = [2,3,9,6,7,8]
// nums = nums.sort()
// console.log(nums);
// let s = 1
// let n = nums[nums.length-s]
// console.log("dis degisken",n);
// //çıktı 5
// greatest();
// function greatest(){
//     console.log("ic degisken",n);
    
//     if( n > nums[nums.length-s]){
//         console.log("ust");
//         console.log("s ust",s);
//         n = nums[nums.length-s]
//         console.log(n);
//         return n;
//     }

//     if (nums[nums.length-s] == n ){
//         s += 1
//         console.log("alt",s);
//         greatest();
//     }
    
// }