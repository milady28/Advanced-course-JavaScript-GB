let str = document.querySelector(".cond-exp").textContent;

let newStr1 = str.replace(/'/g, "\"");
let newStr2 = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');;

document.querySelector(".cond-exp-1").textContent = newStr1;
document.querySelector(".cond-exp-2").textContent = newStr2;

/** Форма обратной связи */
const form = document.querySelector(".form");
const validateBtn = form.querySelector(".form__btn");
const error = form.querySelector(".form__error");

const name = document.querySelector("input[name=name]");
const phone = document.querySelector("input[name=phone]");
const email = document.querySelector("input[name=email]");

const nameRegexp = /^[а-я]+$/iu;
const phoneRegexp = /\+7\(\d{3}\)\d{3}-\d{4}$/iu;
const emailRegexp = /^[a-zA-Z0-9.-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/iu;

form.addEventListener("submit", function (evt) {
  evt.preventDefault();

  onInput(name, nameRegexp);
  onInput(phone, phoneRegexp);
  onInput(email, emailRegexp);
})

function onInput(input, regexp) {
  if (isInputValid(input.value, regexp)) {
    input.style.borderColor = "green";
  } else {
    input.style.borderColor = "red";
    error.innerHTML = "Ошибка! Форма заполнена некорректно."
  }
}

function isInputValid(value, regexp) {
  return regexp.test(value);
}