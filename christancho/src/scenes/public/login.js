import { register } from "./register.js";

export const login = (array) => {
    if(localStorage.getItem('token')){
        alert('Existe Token bro!!!');
        return
    }
    const root = document.getElementById('root');

    const element = `
        <form id="login-form" action="submit">
            <div id="login-cont">
                <input class="input-login" type="text" name="username" placeholder="username" />
                <input class="input-login" type="password" name="password" placeholder="password" />
                <button class="input-login" type="submit">Login</button>
                <button class="input-login" id="register" >Register</button>
            </div>
        </form>
    `;

    root.innerHTML = "";
    root.innerHTML = element;


    const btnRegister = document.getElementById('register');
    btnRegister.addEventListener('click', () => {
        register(array)
    });

}