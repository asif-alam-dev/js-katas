//ejercicio 1

console.log(typeof 42); // predicción: number
console.log(typeof "42"); // predicción: string
console.log(5 == "5"); // predicción: true
console.log(5 === "5"); // predicción: false
console.log(typeof [1, 2]); // predicción: object
console.log(typeof null); // predicción: (¡ojo, esta tiene truco!) object

//ejercicio 2

const clasificarEdad = (edad) => {
  if (edad < 18) {
    return "menor";
  } else if (edad < 65) {
    return "adulto";
  } else {
    return "jubilado";
  }
};

console.log(clasificarEdad(10)); // "menor"
console.log(clasificarEdad(30)); // "adulto"
console.log(clasificarEdad(70)); // "jubilado"
console.log(clasificarEdad(18)); // "adulto"  ← prueba los bordes

//ejercicio 3

const esFinDeSemana = (dia) => {
  const diaMinusc = dia.toLowerCase();

  return diaMinusc === "sabado" || diaMinusc === "domingo";
};

console.log(esFinDeSemana("sabado")); // true
console.log(esFinDeSemana("DOMINGO")); // true
console.log(esFinDeSemana("lunes")); // debería ser false
