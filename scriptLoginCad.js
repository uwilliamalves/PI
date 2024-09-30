const containerForm = document.getElementById('container-form');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');
const formCadastro = document.getElementById('form-cad');
const formLogin = document.getElementById('form-login');



registerBtn.addEventListener('click', () => {
    containerForm.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    containerForm.classList.remove("active");
});

const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

formCadastro.addEventListener('submit', (event) => {
    event.preventDefault();

    nameValid();
    emailValid();
    passwordValid();

})

formLogin.addEventListener('submit', (event) => {
    event.preventDefault();

    emailValidLogin();
    passwordValidLogin()

})

function setError(index){
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';
}

function removeError(index){
    campos[index].style.border = '2px solid #00ab06';
    spans[index].style.display = 'none';
    
}

function nameValid(){
    if(campos[0].value.length < 3){
        setError(0);      
    } else{
        removeError(0)
    }
} 

function emailValid(){
    if(!emailRegex.test(campos[1].value)){
        setError(1);

    }else{
        removeError(1);
    }
}

function passwordValid(){
    if(campos[2].value.length < 8){
        setError(2);
    }else{
        removeError(2);
    }
}

function emailValidLogin(){
    if(!emailRegex.test(campos[3].value)){
        setError(3);

    }else{
        removeError(3);
    }
}

function passwordValidLogin(){
    if(campos[4].value.length < 8){
        setError(4);
    }else{
        removeError(4);
    }
}