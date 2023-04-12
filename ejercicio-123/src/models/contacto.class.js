export class Contacto {
    name = '';
    surname = '';
    email = '';
    online = false;

    constructor(name, surname, email, conectado){
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.online = conectado;
    }
}