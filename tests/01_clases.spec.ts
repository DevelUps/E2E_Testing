//clase
class Persona {
    nombre: string;
    edad: number;   
    //constructor
    constructor(nombre: string, edad: number) {
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        return `Hola, soy ${this.nombre} y tengo ${this.edad} años.`;
    }
}   