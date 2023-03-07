import throttle from 'lodash.throttle';

const refs = {
  form: document.querySelector('.feedback-form'),
  email: document.querySelector('.feedback-form  input[name="email"]'),
  message: document.querySelector('.feedback-form  textarea[name="message"]'),
};

function saveToStorage(filling) {
  localStorage.setItem('feedback-form-state', JSON.stringify(filling));
}

const formFilling = {};

function saveFilling() {
  formFilling.email = refs.email.value;
  formFilling.message = refs.message.value;
  saveToStorage(formFilling);
}

const parsedFilling = JSON.parse(localStorage.getItem('feedback-form-state'));

console.log(parsedFilling);

function getFilling() {
  if (parsedFilling) {
    refs.email.value = parsedFilling.email;
    refs.message.value = parsedFilling.message;
  }
}

function onSubmit(event) {
  event.preventDefault();

  localStorage.removeItem('feedback-form-state');
  event.currentTarget.reset();
  console.log(formFilling);
}

refs.form.addEventListener('input', throttle(saveFilling, 500));
refs.form.addEventListener('submit', onSubmit);
window.addEventListener('DOMContentLoaded', event => {
  getFilling();
});
