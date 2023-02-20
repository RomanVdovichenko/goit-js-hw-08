import throttle from 'lodash.throttle';
import { load, save,remove } from './storage';
// const throttle = require('lodash.throttle');

const form = document.querySelector(".feedback-form");
const email = form.querySelector('input');
const message = form.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";
const user = {
    email: email,
    message: message,
}

updateForm();
form.addEventListener("input", throttle((saveForm), 500));
form.addEventListener('submit', onSubmit);

function updateForm() {
    email.textContent = load(LOCALSTORAGE_KEY).email;
    email.placeholder = load(LOCALSTORAGE_KEY).email || '';
    console.log(email.textContent);
    message.textContent = load(LOCALSTORAGE_KEY).message;
}

function saveForm() {
    user.email = form.elements.email.value;
    user.message = form.elements.message.value;
    save(LOCALSTORAGE_KEY, user);
}

function onSubmit(evt) {
    evt.preventDefault();
    console.log(user);
    remove(LOCALSTORAGE_KEY);
    form.reset();
}




