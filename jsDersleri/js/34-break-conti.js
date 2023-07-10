
const LOREM_LIST = [ "lorem", "ipsum", "dolor", "sit", "XD"]

let counter = 0

// for (;counter <10; counter++){
//     console.log(counter );
//     if(counter === 5) {break}
//     console.log(counter );
// }
// for (;counter <10; counter++){
//     if(counter === 5) {continue}
//     console.log(counter );
// }

const UL_DOM = document.querySelector("#user-list")

let index = 0;
//break buraya kadar demek
// for(;index <LOREM_LIST.length; index++){
//     if(LOREM_LIST[index] == "dolor"){
//         break
//     }
//     let LI_DOM = document.createElement('li')
//     LI_DOM.innerHTML = LOREM_LIST[index]
//     UL_DOM.append(LI_DOM)
// }
//continue bunu atla gibisinden çalışıyor
for(;index <LOREM_LIST.length; index++){
    if(LOREM_LIST[index] == "dolor"){
        continue
    }
    let LI_DOM = document.createElement('li')
    LI_DOM.innerHTML = LOREM_LIST[index]
    UL_DOM.append(LI_DOM)
}