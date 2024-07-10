
export class Person {
    constructor(name, password) {
        this.name = name;
        this.password = password;
    };

    addReservation(){
        console.log("Reserva agregada");
    }
}

export class RegularPerson extends Person{
    register(){
        console.log("register");
    }
}

export class Admin extends Person {
    addUser(name, array){
        array.push(name);
        console.log(`Usuario ${name} agregado extitosamente!`);
    };
    delete(){
        console.log("Usuario eliminado");
    }
    updateReservation(){
        console.log("Reserva actualizada");
    }
}
