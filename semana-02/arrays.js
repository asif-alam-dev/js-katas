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
