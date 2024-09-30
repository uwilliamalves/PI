const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


const formRegister = document.getElementById('form-register');
const nameInput = document.getElementById('name-form');
const emailInput = document.getElementById('email-senha');
const passwordInput = document.getElementById('senha-form');

