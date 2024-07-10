import { Admin } from "./class/Persona.js";
import { login } from "./scenes/public/login.js";

const users = [];
const reservations = [];

localStorage.setItem('array', JSON.stringify(users));

document.addEventListener("DOMContentLoaded", () => {
    login(users);
});


