import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  // Recording...
});

let edad: number = 25;
let altura: number = 1.75;

// operaciones numericas
let suma: number = edad +10;// suma = 35
let resta: number = edad - 5;// resta = 20
let multiplicacion: number = edad * 2;// multiplicacion = 50
let division: number = edad / 5;// division = 5

// primer nombre
let primernombre: string = "Juan";// variable  tipo string
let apellidopaterno: string = "Pérez";// variable tipo string

//nombre completo
let nombrecompleto: string = primernombre + " " + apellidopaterno;// variable tipo string

//booleanos
let esEstudiante: boolean = true;// variable tipo booleano
let esEmpleado: boolean = false;// variable tipo booleano
//condicionales
if (esEstudiante) {
  console.log("Es estudiante");
}
else {
  console.log("No es estudiante");
}
//arreglos
let numeros: number[] = [1, 2, 3, 4, 5];// variable tipo arreglo de numeros
let nombres: string[] = ["Juan", "Pedro", "Maria"];// variable tipo arreglo de strings
let edades: number[] = [25, 30, 35];// variable tipo arreglo de numeros
//objetos
let persona: { nombre: string, edad: number, altura: number } = {
  nombre: "Juan",
  edad: 25,
  altura: 1.75
};// variable tipo objeto
//funciones
function sumar(a: number, b: number): number {
  return a + b;
}
function restar(a: number, b: number): number {
  return a - b;
}
function multiplicar(a: number, b: number): number {
  return a * b;
}
function dividir(a: number, b: number): number {
  return a / b;
}
//llamada a funciones
let resultadoSuma: number = sumar(5, 10);// resultadoSuma = 15
let resultadoResta: number = restar(10, 5);// resultadoResta = 5
let resultadoMultiplicacion: number = multiplicar(5, 10);// resultadoMultiplicacion = 50
let resultadoDivision: number = dividir(10, 5);// resultadoDivision = 2
//console.log(resultadoSuma);