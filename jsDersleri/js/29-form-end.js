

let userFormDOM = document.querySelector("#user-form")
userFormDOM.addEventListener("submit", formHandler)

function formHandler(event){
    event.preventDefault();
    const USER_NAME = document.querySelector("#user-name")
    const SCORE = document.querySelector("#score")
    addItem(USER_NAME.value, SCORE.value)
}

let userListDOM = document.querySelector("#user-list")

const addItem = (userName, score) => {
    let liDOM = document.createElement("li")
    liDOM.innerHTML = `${userName} ${score}`
    userListDOM.append(liDOM)
}


{/* <li class="list-group-item d-flex justify-content-between align-items-center">
Cras justo odio
<span class="badge  bg-primary">14</span>
</li> */}