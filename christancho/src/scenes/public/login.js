import { register } from "./register.js";

export const login = (array) => {
    if(localStorage.getItem('token')){
        return
    }
    const root = document.getElementById('root');

    const element = `
        <div id="login-form">
            <div id="login-cont">
                <input class="input-login" type="text" name="username" placeholder="username" />
                <input class="input-login" type="password" name="password" placeholder="password" />
                <button class="input-login" id="submit">Login</button>
                <button class="input-login" id="register" >Register</button>
            </div>
        </div>
    `;

    root.innerHTML = "";
    root.innerHTML = element;


    const btnRegister = document.getElementById('register');
    btnRegister.addEventListener('click', () => {
        register(array)
    });

    const $submit = document.getElementById('submit');
    $submit.addEventListener('click', (e) => {
        e.preventDefault();
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        
        const search = array.find(user => user.name === username && user.password === password);
        
        if(search){
            localStorage.setItem('token', '123');
            localStorage.setItem('login', JSON.stringify(search));
            window.location.reload();
        };
    });

}