export const dashboard = (arrayBookings) => {
    const root = document.getElementById('root');

    const addBookings = (arrayBookings) => {
        let elements = '';
        
        const login = JSON.parse(localStorage.getItem('login'));
        
        let reservas = arrayBookings.filter(reserva => reserva.user === login.name)

        if(login.roll === '1'){
            reservas = arrayBookings;
        }

        reservas.forEach((element, index) => {
            const row = `
                <tr>
                    <td>${element.name}</td>
                    <td>${element.state}</td>
                    <td>${element.user}</td>
                    <td><button class="delete" data-index="${index}">Delete</button></td>
                    <td><button class="update" data-index="${index}">Update</button></td>
                </tr>
            `;
            elements += row;
        });
        return elements;
    }

    const renderDashboard = () => {
        const elements = addBookings(arrayBookings);
        const dashboardHtml = `
            <table>
                <thead>
                    <tr>
                        <th>Reservas</th>
                        <th>Estado</th>
                        <th>Usuario</th>
                        <th>Accion</th>
                    </tr>
                </thead>
                <tbody>
                    ${elements}
                </tbody>
            </table>
            <button id="add">Agregar reserva</button>
            <button id="logout">Salir</button>
        `;
        root.innerHTML = dashboardHtml;

        const $deleteButtons = document.getElementsByClassName('delete');
        for (let i = 0; i < $deleteButtons.length; i++) {
            $deleteButtons[i].addEventListener('click', () => {
                const index = $deleteButtons[i].getAttribute('data-index');
                arrayBookings.splice(index, 1); 
                renderDashboard(); 
            });
        }

        const $logout = document.getElementById('logout');
        $logout.addEventListener('click', () => {
            localStorage.removeItem('token');
            window.location.reload();
        });

        const $update = document.getElementsByClassName('update');
        for (let i = 0; i < $update.length; i++) {
            $update[i].addEventListener('click', () => {
                const newBooking = prompt('Ingrese el nuevo destino de la reserva');
                if (newBooking !== null) {
                    const index = $update[i].getAttribute('data-index');
                    arrayBookings[index].name = newBooking; 
                    console.log(arrayBookings);
                    updateLocalStorage(arrayBookings);
                    renderDashboard();
                }
            });
        }
    }

    const updateLocalStorage = (arrayBookings) => {
        localStorage.setItem('bookings', JSON.stringify(arrayBookings));
    }

    renderDashboard(); 
}
