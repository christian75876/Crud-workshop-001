import { dashboard } from "./scenes/private/dashboard.js";
import { login } from "./scenes/public/login.js";

let users = JSON.parse(localStorage.getItem('users')) || [
    { 
        name: 'Admin',
        password: '1234',
        roll: '1' 
    },
    {
        name: 'Daniela',
        password: '1234',
        roll: '0'
    }
];

let reservations = JSON.parse(localStorage.getItem('reservations')) || [
    { name: 'San andres', state: true, user:'Daniela' },
    { name: 'Cali', state: false, user:'Admin' },
    
];

localStorage.setItem('users', JSON.stringify(users));
localStorage.setItem('bookings', JSON.stringify(reservations));

document.addEventListener("DOMContentLoaded", () => {
    users = JSON.parse(localStorage.getItem('users')) || users;
    reservations = JSON.parse(localStorage.getItem('reservations')) || reservations;

    console.log('Usuarios cargados:', users);
    console.log('Reservas cargadas:', reservations);

    login(users);

    if(localStorage.getItem('token')){
        dashboard(reservations);
    }

});




