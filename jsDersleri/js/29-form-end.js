let userFormDOM = document.querySelector("#user-form");
userFormDOM.addEventListener("submit", formHandler);
let reset = document.querySelector("#reset");
let alertDOM = document.querySelector("#alert");
const alertFunction = (
  title,
  message,
className = "danger"
) => `<div class="alert alert-${className} alert-dismissible fade show" role="alert">
<strong>${title}</strong> ${message}
<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
</div>`;

function formHandler(event) {
  event.preventDefault();
  const USER_NAME = document.querySelector("#user-name");
  const SCORE = document.querySelector("#score");
  if (USER_NAME.value && SCORE.value) {
    addItem(USER_NAME.value, SCORE.value);
    // USER_NAME = "";
    // SCORE = "";
    resetForm();
    alertDOM.innerHTML = alertFunction(
        "Bilgileriniz kaydedildi",
        "",
        "success"
    )
  } else {
    alertDOM.innerHTML = alertFunction(
        "bilgi yanlış",
        "Eksik bilgi girdiniz",
        

        );
  }
}

function resetForm() {
  reset.click();
}

let userListDOM = document.querySelector("#user-list");

const addItem = (userName, score) => {
  let liDOM = document.createElement("li");
  liDOM.innerHTML = `${userName} <span class="badge  bg-primary">${score}</span>`;
  liDOM.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  userListDOM.append(liDOM);
};

{
  /* <div class="alert alert-danger" role="alert">
  This is a danger alert—check it out!
</div> */
}

{
  /* <li class="list-group-item d-flex justify-content-between align-items-center">
Cras justo odio
<span class="badge  bg-primary">14</span>
</li> */
}
