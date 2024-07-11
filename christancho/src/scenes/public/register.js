import { RegularPerson } from "../../class/Persona.js";
import { dashboard } from "../private/dashboard.js";

export const register = (array) => {
    const root = document.getElementById('root');
    root.innerHTML = "";

    const registerForm = `
        <div id="login-form">
            <div id="login-cont">
                <input id="name" class="input-login" type="text" name="username" placeholder="username" />
                <input id="password" class="input-login" type="password" name="password" placeholder="password" />
                <button class="input-login" id="register" >Register</button>
            </div>
        </div>
    `;

    root.innerHTML = registerForm

    const register = document.getElementById('register');
    register.addEventListener('click', (e) => {
        const name = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        if((name || password) === ''){
            alert('alguno de los campos esta vacio!')
            return
        }

        const person = new RegularPerson(name, password);
        array.push(person);
        localStorage.setItem('token', '123');
        window.location.reload();
    });

}
