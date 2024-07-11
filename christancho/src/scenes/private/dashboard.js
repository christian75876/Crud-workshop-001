const addBookings = (arrayBookings) => {
    let elements = '';
    arrayBookings.forEach(element => {
        const row = `
            <tr>
                <td>${element.name}</td>
                <td>${element.state}</td>
                <td><button class="delete">Delete</button></td>
            </tr>
        `;
        elements += row;
    });
    return elements;
}

export const dashboard = (arrayBookings) => {
    const root = document.getElementById('root');

    const elements = addBookings(arrayBookings);
    const dashboardHtml = `
        <table>
            <thead>
                <tr>
                    <th>Reservas</th>
                    <th>Estado</th>
                    <th>Acción</th>
                </tr>
            </thead>
            <tbody>
                ${elements}
            </tbody>
        </table>
        <button id="add">Agregar reserva</button>
    `;

    root.innerHTML = dashboardHtml;

    // Agregar event listener a los botones "Delete"
    const deleteButtons = document.getElementsByClassName('delete');
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener('click', () => {
            // Eliminar la fila (tr) correspondiente al botón clickeado
            deleteButtons[i].closest('tr').remove();
        });
    }
}
