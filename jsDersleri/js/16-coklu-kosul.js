
let userName = prompt("kullanıcı adı")
let age = prompt("yaşınız")
let info = document.querySelector("#info")

if (userName && age >= 18){
    info.innerHTML = "ehliyet alabilir"
}
else if(!userName){
    info.innerHTML = "kullanıcı adı girilmedi"
}
else if( !(age >=18) ){
    info.innerHTML = "yaş bilginiz yok veya 18 yaşından küçüksünüz"
}

// let myString = "d"

// switch(myString){
//     case "f":
//         console.log("naber");
//         break;
//     case ("c" || "d" || "b"):
//         console.log("hi");
//         break;
//     case("a"|| "f"):
//         console.log("naber müdür");
// }

//switch case

// switch(letter){
//     case("a" || "e" || "i" || "o" || "u"):
//         return "A"
//     case(letter == "b" || "c" || "d" || "f" || "g"):
//         return "B"
//     case(letter == "h" || "j" || "k" || "l" || "m" || "n"):
//         return "C"
//     default:
//         return "D";
// }
