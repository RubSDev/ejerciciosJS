//Ejercicio 01
let fruta = "manzana";

console.log(fruta);

//Ejercicio 02
let c = 0;
c = 50;

console.log(c);

//Ejercicio 03
let x = 3;
let y = 10;

console.log(x + y);

//Ejercicio 04
let z = 0;
let x = 10;
let y = 20;

z = x + y;
console.log(z);

//Ejercicio 05
let nombre = "David",
  apellido = "Mendoza",
  edad = 26;

console.log(nombre, apellido, edad);

//Ejercicio 06
let num01 = 20;
let num02 = 10;

console.log(num01 * num02);

//Ejercicio 07
console.log(13 % 7);

//Ejercicio 08
let num03 = 15;
let num04 = 5;

console.log((num03 += num04));

//Ejercicio 09
let num05 = 10;
let num06 = 3;

console.log((num05 *= num06));

//Ejercicio 10
let a = 10;
let b = 8;

if (a > b) {
  console.log(a + " es mayor que " + b);
} else {
  console.log(b + " es mayor que " + a);
}

//Ejercicio 11
let c = 24;
let d = 24;

if (c === d) {
  console.log("Son iguales");
} else {
  console.log("No son iguales");
}

//Ejercicio 12
let e = 7;
let f = 3;

if (e === f) {
  console.log("Valen lo mismo");
} else {
  console.log("No valen lo mismo");
}

//Ejercicio 13
let x = 60; //Limite de edad para inscribirse a Kodemia
let y = parseInt(prompt("¿Qué edad tienes?"));

if (x > y) {
  console.log("Hola, koder");
} else {
  console.log("Lo sentimos, aún no puedes inscribirte");
}

//Ejercicio 14
let x = parseInt(prompt("¿Cuánto valen las manzanas"));
let y = parseInt(prompt("Cuánto valen las peras"));

if (x >= y) {
  console.log("Compra manzanas");
} else {
  console.log("Compra peras");
}
