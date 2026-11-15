const paresPorDos = (numeros) => {
  const resultado = [];
  // 1. recorre cada número con for...of
  for (let numero of numeros) {
    // 2. si es par, mete (número * 2) en resultado
    if (numero % 2 === 0) {
      resultado.push(numero * 2);
    }

    /*
    numero % 2 === 0 ? resultado.push(numero*2
    )
    */
  }

  return resultado;
};

console.log(paresPorDos([1, 2, 3, 4])); // debería mostrar [ 4, 8 ]
