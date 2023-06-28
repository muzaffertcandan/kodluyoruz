
let price = 100
let stringPrice = "111"
let hasPassword = true
// typeof ile veri tipi öğrenilebilir 
//number
console.log(
    "price",
    typeof(price)
);
//string
console.log(
    "stringPrice",
    typeof(stringPrice)
);

console.log(
    "hasPassword",
    typeof(hasPassword)
);

// string i int ve float a dönüştürmek
let number1 = "11"
number1 = parseInt(number1)
console.log(
    "number1: ",
    number1,
    "type of number1: ",
    typeof(number1)
);

let number2 = "11px"
number2 = parseInt(number2)
console.log(
    "number2: ",
    number2,
    "type of number2: ",
    typeof(number2)
);

let number3 = "12.3px"
number3 = parseFloat(number3)
console.log(
    "number3: ",
    number3,
    "type of number3: ",
    typeof(number3)
);

//number dan string e dönüştürmek
let number4 = 55
number4 = number4.toString()
console.log(number4, typeof(number4));