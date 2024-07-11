import { Admin } from "./class/Persona.js";
import { dashboard } from "./scenes/private/dashboard.js";
import { login } from "./scenes/public/login.js";

const users = [];
const reservations = [
    {
        name: 'Jorge',
        state: true
    },
    {
        name: 'Daniela',
        state: false
    }
];

localStorage.setItem('array', JSON.stringify(users));

document.addEventListener("DOMContentLoaded", () => {
    login(users);

    if(localStorage.getItem('token')){
        dashboard(reservations);
    }

});




