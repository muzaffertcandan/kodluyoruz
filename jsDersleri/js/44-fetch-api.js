// // fetch api
// //json dan veri çektik
fetch("data/settings.json")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    console.log(responseJson);
    console.log(responseJson.userName);
  });

let userListDOM = document.querySelector("#user-list");

//api den veri çektik
// get isteği ile
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    responseJson.forEach((item) =>
    {
        let liDOM = document.createElement("li")
        liDOM.innerHTML = item.title
        userListDOM.append(liDOM)
    });
  });

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => 
//     response.json()
//   )
//   .then((json) => 
//     console.log(json)
//   )
//   .catch((err) =>
//    console.log(err));

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then(response => response.json())
// .then(json => {
//     json.forEach(item => {
//         console.log(item.email);
//     })
// })