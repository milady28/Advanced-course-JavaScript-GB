let str = document.querySelector(".cond-exp").textContent;

let newStr1 = str.replace(/'/g, "\"");
let newStr2 = str.replace(/^'|(\s)'|'(\s)|'$/g, '$1"$2');;

document.querySelector(".cond-exp-1").textContent = newStr1;
document.querySelector(".cond-exp-2").textContent = newStr2;

/** Форма обратной связи */
document.getElementById('form').addEventListener('submit', e => {
  let valid = new Validator('form');
  if (!valid.valid) {
    e.preventDefault();
  }
})