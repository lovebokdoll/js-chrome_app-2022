const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLodinBtnClick() {
  console.log(loginInput.value);
}

loginButton.addEventListener("click", handleLodinBtnClick);
