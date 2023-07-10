/*
{userName: "AhMeT", shortName: }
*/

const USERS = ["muzaffer", "Talha", "Candan", "Emİr", "FAAruk", "yusuf"];

const NEW_USERS = USERS.map((item) => item.toLocaleLowerCase());

console.log(NEW_USERS);

// const USERS_OBJ = USERS.map((myItem) => {
//   return {
//     userName: myItem,
//     shortName: `${myItem[0]}`,
//     newName: `${myItem[0].toUpperCase()}${myItem.slice}`,
//   };
// });
// arrow function larda 1 değer dönülüyorsa return yerine ( ) kodun parantezin içine sarmalanması yeterlidir 
const USERS_OBJ = USERS.map((myItem) => 
  ({
    userName: myItem,
    shortName: `${myItem[0]}`,
    newName: `${myItem[0].toUpperCase()}${myItem.slice}`,
  })
);

console.log(USERS_OBJ);
