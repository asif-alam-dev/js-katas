const saludar = () => console.log("Hola!");

const hacerDosVeces = (accion) => {
  accion(); // ← hacerDosVeces la ejecuta
  accion(); // ← y otra vez
};

hacerDosVeces(saludar); // imprime "Hola" dos veces

const aplicar = (numero, operacion) => {
  return operacion(numero); // ← aplicar ejecuta tu función y le pasa el número
};

const doble = (n) => n * 2;

console.log(aplicar(5, doble)); // 10

//console.log(hacerDosVeces(saludar())); // ← con paréntesis
// le estamos pasando el valor de la funcion y no la funcion
//el log no tiene return porque ya va implícito al tener
//solo una orden

hacerDosVeces(saludar);

const monedas = [2, 1, 5];

const total = monedas.reduce((llevo, moneda) => {
  console.log(
    "llevo:",
    llevo,
    "| moneda:",
    moneda,
    "| devuelvo:",
    llevo + moneda,
  );
  return llevo + moneda;
}, 0);

console.log("Total:", total);
