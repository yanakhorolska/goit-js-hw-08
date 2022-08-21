import throttle from 'lodash.throttle';

const form = document.querySelector(".feedback-form");
const email = document.querySelector('input');
const message = document.querySelector('textarea');

form.addEventListener("input", throttle(onInputChange, 500));
form.addEventListener("submit", onFormSubmit);

const LOCAL_STORAGE_KEY = "feedback-form-state";
const savedValue = localStorage.getItem(LOCAL_STORAGE_KEY);
const parsedValue = JSON.parse(savedValue);
const formData = { ...parsedValue };

getLocaleStorage();

function onInputChange(evt) {
    formData[evt.target.name] = evt.target.value;
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(evt) {
    evt.preventDefault();
    if (!email.value || !message.value) {
        return alert("You can`t submit empty form");
    }
    evt.target.reset();
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    console.log(formData);
    formData.email = '';
    formData.message = '';
}

function getLocaleStorage() {
    if (savedValue) {
        parsedValue.email === undefined ? email.value = "" : email.value = parsedValue.email;
        parsedValue.message === undefined ? message.value = "" : message.value = parsedValue.message;
    }
}