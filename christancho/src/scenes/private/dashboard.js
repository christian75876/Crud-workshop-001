

const addbookings = (ararrayBokings) => {
    let elemets = '';
    ararrayBokings.forEach(element => {
        const row = `
            <tr>
            <td>${element.name}</td>
            <td>${element.state}</td>
            </tr>
        `;
        elemets += row;
    });
    return elemets;
}

export const dashboard = (arrayBokings) => {

    const root = document.getElementById('root');

    const elemets = addbookings(arrayBokings);
    const dashboard = `
        <table>
            <thead>
                <tr>
                    <th>Reservas</th>
                    <th>Estado</th>
                </tr>
            </thead>
            <tbody>
            ${elemets}
            </tbody>
        </table>
    `;

    root.innerHTML = dashboard;
    

}



