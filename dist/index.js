"use strict";
var nombre = 'Jhon';
var edad = 37;
console.log("Hola ".concat(nombre, ", tienes ").concat(edad, " a\u00F1os"));
// Tipos de datos
var nombre1 = 'Jhon';
var edad2 = 37;
var activado = true;
var arrayNumeros = [1, 2, 3, 4, 5];
// arrayNumeros.push("algo"); // Error por tipo de dato
// Inferencia de tipos
var array1 = [1, 2, 3, 4, 5];
var arraymixto = [1, 2, 3, 4, 5, "hola"];
// Enums
var Direccion;
(function (Direccion) {
    Direccion[Direccion["Arriba"] = 0] = "Arriba";
    Direccion[Direccion["Abajo"] = 1] = "Abajo";
    Direccion[Direccion["Izquierda"] = 2] = "Izquierda";
    Direccion[Direccion["Derecha"] = 3] = "Derecha";
})(Direccion || (Direccion = {}));
var movimiento = Direccion.Derecha;
if (movimiento == Direccion.Derecha) {
    console.log("Derecha");
}
// Enums meses
var Meses;
(function (Meses) {
    Meses[Meses["Enero"] = 1] = "Enero";
    Meses[Meses["Febrero"] = 2] = "Febrero";
    Meses[Meses["Marzo"] = 3] = "Marzo";
    Meses[Meses["Abril"] = 4] = "Abril";
    Meses[Meses["Mayo"] = 5] = "Mayo";
    Meses[Meses["Junio"] = 6] = "Junio";
    Meses[Meses["Julio"] = 7] = "Julio";
    Meses[Meses["Agosto"] = 8] = "Agosto";
    Meses[Meses["Septiembre"] = 9] = "Septiembre";
    Meses[Meses["Octubre"] = 10] = "Octubre";
    Meses[Meses["Noviembre"] = 11] = "Noviembre";
    Meses[Meses["Diciembre"] = 12] = "Diciembre";
})(Meses || (Meses = {}));
var mes = Meses.Julio;
console.log("El valor numerico del mes de Julio es ".concat(mes));
// Enums Roles
var Roles;
(function (Roles) {
    Roles["User"] = "Usuario";
    Roles["Admin"] = "Administrador";
    Roles["SuperAdmin"] = "SuperAdministrador";
})(Roles || (Roles = {}));
console.log("El rol de usuario es ".concat(Roles.SuperAdmin));
// Objetos
var persona = {
    nombre: 'Jhon',
    edad: 37,
    direccion: 'Colombia',
    telefono: '+573100000000'
};
persona.nombre = 'Jhonatan';
console.log("El nombre de la persona es ".concat(persona.nombre));
// Aserciones de tipos
var someValue = "this is a string";
var strLength = someValue.length;
console.log("La longitud de la cadena es ".concat(strLength));
var strLength2 = someValue.length;
console.log("La longitud de la cadena es ".concat(strLength2));
// let mycanva = <HTMLCanvasElement>document.getElementById("main");
// Funciones
function suma(a, b) {
    return a + b;
}
console.log("La suma de 2 + 2 es ".concat(suma(2, 2)));
function saludar(nombre, saludo) {
    if (saludo === void 0) { saludo = "Hola"; }
    console.log("".concat(saludo, " ").concat(nombre));
}
saludar("Jhon", "Como estas");
function concatenar() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args.join(" ");
}
console.log(concatenar("Hola", "Jhon", "como", "estas"));
