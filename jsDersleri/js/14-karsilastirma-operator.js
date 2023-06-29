
let price = "100"
let user = "muzaffer"
// sadece değeri eşitse ==
console.log(price == 1);
console.log(price == 100);

// hem tür hem değeri eşitse ===
console.log(price === 100);

// eşit değilse !=
console.log(user != "guest");

//küçükse <
console.log(price < 100);
console.log(price < 101); //true

// büyük eşitse >=
console.log("price >= 102",price >= 102);
console.log("price >= 90",price >= 90);

//&& ve
price = null
console.log(price != null && user != 100); 

// veya ||
console.log(price != null || user != 85); 

// değil !
console.log("deneme",price == 154 || user != "asdas"); 

console.log(!!10);
