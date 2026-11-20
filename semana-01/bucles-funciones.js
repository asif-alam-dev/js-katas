//1.

const sumarHasta = (n) => {
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += i;
  }

  return total;
};

console.log(sumarHasta(5)); // 15  (1+2+3+4+5)
console.log(sumarHasta(0)); // ¿qué esperas? ¿qué sale?

//2.

const contarVocales = (texto) => {
  const textoPequeno = texto.toLowerCase();
  let contador = 0;

  for (let letra of textoPequeno) {
    if ("aeiou".includes(letra)) {
      contador++;
    }
  }

  return contador;
};

console.log(contarVocales("Hola mundo")); // 4
console.log(contarVocales("xyz"));

//3.

const mayor = (numeros) => {
  let elMasGrande = numeros[0];
  //let elMasGrande = 0;

  for (let numero of numeros) {
    if (numero > elMasGrande) {
      elMasGrande = numero;
    }
  }

  return elMasGrande;
};

console.log(mayor([3, 9, 2])); // 9
console.log(mayor([-3, -9, -2])); // debería dar -2

//4.

const esPalindromo = (palabra) => {
  let haciaAtras = "";
  //let haciaAtras = null;

  for (let i = palabra.length - 1; i >= 0; i--) {
    haciaAtras += palabra[i];
  }

  return haciaAtras === palabra;
};

console.log(esPalindromo("reconocer")); // true
console.log(esPalindromo("hola")); // false

//FizzBuzz

for (let i = 1; i <= 15; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}
