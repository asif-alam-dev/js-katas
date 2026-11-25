const lenguajes = ["JavaScript", "Python"];

lenguajes.push("SQL");

console.log(lenguajes);

console.log(lenguajes.length);

console.log(lenguajes[lenguajes.length - 1]);

const tieneLenguaje = (lista, nombre) => {
  return lista.includes(nombre);
};

console.log(tieneLenguaje(lenguajes, "Python"));

console.log(tieneLenguaje(lenguajes, "python"));

// da resultados distintos porque discrimina minúscula y mayúscula.

const num = [1, 2, 3];

const dobles = (numeros) => numeros.map((numero) => numero * 2);

console.log(dobles(num));

console.log(num);

const losNombres = ["ana", "luis"];

const enMayusculas = (nombres) => {
  return nombres.map((nombre) => nombre.toUpperCase());
};

console.log(enMayusculas(losNombres));

console.log(losNombres);

//5.filter

const listaEdades = [12, 18, 25, 15, 30];

const mayoresDeEdad = (edades) => edades.filter((edad) => edad >= 18);

console.log(mayoresDeEdad(listaEdades));
console.log(listaEdades);

//6.find

const listaPalabras = ["sol", "casa", "ordenador", "mesa", "teclado"];
const dosPalabras = ["sol", "mar"];

const primeraLarga = (palabras) =>
  palabras.find((palabra) => palabra.length > 5);

console.log(primeraLarga(listaPalabras));

console.log(primeraLarga(dosPalabras));
// cuando find no encuentra la condicion, siempre da undefined. Ninguna palabra
// tiene más de 5 letras.

//7.reduce

const listaNumeros = [1, 2, 3, 4];

const listaVacia = [];

const sumar = (numeros) =>
  numeros.reduce((acumulador, elemento) => {
    console.log("acumulador:", acumulador, "elemento:", elemento);
    return acumulador + elemento;
  }, 0);

console.log(sumar(listaNumeros));
console.log(sumar(listaVacia));

const sumarSinInicial = (numeros) =>
  numeros.reduce((acumulador, elemento) => acumulador + elemento);

console.log(sumarSinInicial(listaNumeros));
//console.log(sumarSinInicial(listaVacia));

//Sin valor inicial el reduce usa el primer elemento del array, con [] no existe ese elemento.

//8. el reto

const losNumeros = [1, 2, 3, 4, 5, 6];

const sumaDeParesDobles = (numeros) =>
  numeros
    .filter((numero) => numero % 2 === 0)
    .map((numero) => numero * 2)
    .reduce((acumulador, elemento) => acumulador + elemento, 0);

console.log(sumaDeParesDobles(losNumeros));

//console.log(sumaDeParesDobles(losNumeros).map((n) => n * 2));
//No va a poder ser encadenado ya que no es un array, lo que devuelve es un número.
// Y da un TypeError: .map is not a function.
//Primero busca el método en el número y obtiene undefined, luego intenta ejecutarlo
//como función y no se puede ya que no es una función.
