import throttle from 'lodash.throttle';
import { load, save,remove } from './storage';

const form = document.querySelector(".feedback-form");
const email = form.querySelector('input');
const message = form.querySelector('textarea');
const LOCALSTORAGE_KEY = "feedback-form-state";
const user = {
    email: '',
    message: '',
}

updateForm();
form.addEventListener("input", throttle((saveForm), 500));
form.addEventListener('submit', onSubmit);

function updateForm() {
    email.value = load(LOCALSTORAGE_KEY).email || "";
    message.value = load(LOCALSTORAGE_KEY).message || "";
    user.email = '';
    user.message = '';
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
    updateForm();
}




