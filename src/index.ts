const nombre = 'Jhon';
const edad = 37;

console.log(`Hola ${nombre}, tienes ${edad} años`);

// Tipos de datos
let nombre1: string = 'Jhon';
let edad2: number = 37;
let activado: boolean = true;

let arrayNumeros: number[] = [1, 2, 3, 4, 5];

// arrayNumeros.push("algo"); // Error por tipo de dato

// Inferencia de tipos
let array1 = [1, 2, 3, 4, 5];
let arraymixto: (string | number)[] = [1, 2, 3, 4, 5, "hola"];

// Enums
enum Direccion {
    Arriba,
    Abajo,
    Izquierda,
    Derecha
}

let movimiento:Direccion = Direccion.Derecha;

if (movimiento == Direccion.Derecha) {
    console.log("Derecha");
}

// Enums meses
enum Meses {
    Enero = 1,
    Febrero,
    Marzo,
    Abril,
    Mayo,
    Junio,
    Julio,
    Agosto,
    Septiembre,
    Octubre,
    Noviembre,
    Diciembre
}

let mes:Meses = Meses.Julio;
console.log(`El valor numerico del mes de Julio es ${mes}`);

// Enums Roles
enum Roles {
    User = 'Usuario',
    Admin = 'Administrador',
    SuperAdmin = 'SuperAdministrador'
}

console.log(`El rol de usuario es ${Roles.SuperAdmin}`);

// Objetos
const persona = {
    nombre: 'Jhon',
    edad: 37,
    direccion: 'Colombia',
    telefono: '+573100000000'
}
persona.nombre = 'Jhonatan';
console.log(`El nombre de la persona es ${persona.nombre}`);

// Aserciones de tipos
let someValue:any = "this is a string";
let strLength:number = (someValue as string).length;
console.log(`La longitud de la cadena es ${strLength}`);

let strLength2:number = (<string>someValue).length;
console.log(`La longitud de la cadena es ${strLength2}`);

// let mycanva = <HTMLCanvasElement>document.getElementById("main");

// Funciones
function suma(a:number, b:number):number {
    return a + b;
}

console.log(`La suma de 2 + 2 es ${suma(2, 2)}`);

function saludar(nombre:string, saludo = "Hola") {
    console.log(`${saludo} ${nombre}`);
}

saludar("Jhon", "Como estas");

function concatenar(...args: string[]) {
    return args.join(" ");
}

console.log(concatenar("Hola", "Jhon", "como", "estas"));