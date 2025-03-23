//metodos
const persona = new Persona("Juan", 30);
persona.saludar();

// una simple funcion que suma dos numeros
function sumar(a: number, b: number): number {
    return a + b;
}
const resultado = sumar(5, 10);
console.log(resultado); // 15

// funcion flecha basica
const multiplicar = (a: number, b: number): number => {
    return a * b;
}   
