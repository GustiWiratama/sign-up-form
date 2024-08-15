const signUpForm = document.forms["input-form"];
const firstNameInput = signUpForm["first-name"];
const lastNameInput = signUpForm["last-name"];
const emailInput = signUpForm["email"];
const password = signUpForm["password"];

const fnMessage = document.querySelector("#fn-message");
const lnMessage = document.querySelector("#ln-message");
const mailMessage = document.querySelector("#email-message");
const passMessage = document.querySelector("#password-message");

const inputHaram = /[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`1234567890]/;
const stringHaram = ["undefined", "boolean", "null", "number", "object"];

const imgError1 = document.querySelector("#error1");
const imgError2 = document.querySelector("#error2");
const imgError3 = document.querySelector("#error3");
const imgError4 = document.querySelector("#error4");

// const hideButton = document.querySelector("#hide-btn");
const hidePass = document.querySelector("#hide-pass");
const showPass = document.querySelector("#show-pass");

showPass.classList.remove("d-none");

function validate() {
  if (firstNameInput.value.trim() === "") {
    fnMessage.classList.remove("text-success");
    fnMessage.classList.add("text-danger");
    fnMessage.innerHTML = "First name cannot be empty";
    imgError1.classList.remove("d-none");
  } else if (inputHaram.test(firstNameInput.value)) {
    fnMessage.classList.remove("text-success");
    fnMessage.classList.add("text-danger");
    fnMessage.innerHTML = "First name cannot be number or symbol";
    imgError1.classList.remove("d-none");
  } else {
    fnMessage.classList.add("text-success");
    fnMessage.classList.remove("text-danger");
    fnMessage.innerHTML = "Success";
    imgError1.classList.add("d-none");
  }
  if (lastNameInput.value.trim() === "") {
    lnMessage.classList.remove("text-success");
    lnMessage.classList.add("text-danger");
    lnMessage.innerHTML = "Last name cannot be empty";
    imgError2.classList.remove("d-none");
  } else if (inputHaram.test(lastNameInput.value)) {
    lnMessage.classList.remove("text-success");
    lnMessage.classList.add("text-danger");
    lnMessage.innerHTML = "Last name cannot be number or symbol";
    imgError2.classList.remove("d-none");
  } else {
    lnMessage.classList.add("text-success");
    lnMessage.classList.remove("text-danger");
    lnMessage.innerHTML = "Success";
    imgError2.classList.add("d-none");
  }
  if (emailInput.value.trim() === "") {
    mailMessage.classList.remove("text-success");
    mailMessage.classList.add("text-danger");
    mailMessage.innerHTML = "Looks like this is not an email";
    imgError3.classList.remove("d-none");
  } else if (
    !emailInput.value.includes("@") ||
    !emailInput.value.includes(".com")
  ) {
    mailMessage.classList.remove("text-success");
    mailMessage.classList.add("text-danger");
    mailMessage.innerHTML = "Looks like this is not an email";
    imgError3.classList.remove("d-none");
  } else {
    mailMessage.classList.add("text-success");
    mailMessage.classList.remove("text-danger");
    mailMessage.innerHTML = "Success";
    imgError3.classList.add("d-none");
  }
  if (password.value.trim() === "") {
    passMessage.classList.remove("text-success");
    passMessage.classList.add("text-danger");
    passMessage.innerHTML = "Password cannot be empty";
    imgError4.classList.remove("d-none");
    // hidePass.classList.add("d-none");
  } else {
    passMessage.classList.add("text-success");
    passMessage.classList.remove("text-danger");
    passMessage.innerHTML = "Success";
    imgError4.classList.add("d-none");
    showPass.classList.remove("d-none");
    // hideButton.style.setProperty("left", "86");
  }
}

// hidePass.addEventListener("click", function () {
//   if (password.type === "password") {
//     password.type === "text";
//   } else {
//     password.type === "password";
//   }
// });

function hidePassword() {
  if (password.type === "password") {
    password.type = "text";
    hidePass.classList.remove("d-none");
    showPass.classList.add("d-none");
  } else {
    password.type = "password";

    hidePass.classList.add("d-none");
    showPass.classList.remove("d-none");
  }
}

hidePass.addEventListener("click", hidePassword);
showPass.addEventListener("click", hidePassword);

signUpForm.onsubmit = (event) => {
  event.preventDefault();
  validate();
};
