const formEl = document.querySelector('.feedback-form');

// //////////////////// trying to make with listener on form: unsuccessful

// const formFilling = {
//   email: formEl.elements.email.value,
//   message: formEl.elements.message.value,
// };

// function saveToStorage(evt) {
//   localStorage.setItem('feedback-form-state', JSON.stringify(formFilling));
// }

// formEl.addEventListener('input', saveToStorage);

// const savedFilling = JSON.parse(localStorage.getItem('feedback-form-state'));

// console.log(savedFilling);

// //////////////////// variant with only intup fild working

const inputEl = formEl.elements.email;
const textareaEl = formEl.elements.message;

const formFilling = {
  email: inputEl.value,
  message: textareaEl.value,
};

inputEl.addEventListener('input', saveToStorage);

function saveToStorage(evt) {
  localStorage.setItem('feedback-form-state', JSON.stringify(formFilling));
}

console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

// inputEl.value = localStorage.getItem('feedback-form-state');

// textarea adding

textareaEl.addEventListener('input', saveToStorage);

console.log(localStorage.getItem('feedback-form-state'));
textareaEl.value = localStorage.getItem('feedback-form-state');
