/**
 * Ejercicio 1 (2pts)​
 * Crear un script (javascript/nodejs) que reciba un rango entre A y B y a partir de este rango se muestren en pantalla los números primos.
 *  --- En matemáticas, un número primo es un número natural mayor que 1 que tiene únicamente dos divisores positivos distintos: él mismo y el 1.
 *  --- Ej: Para el rango entre 1 y 10, los números primos serán 2,3,5 y 7.
 *
 **/

console.log(`

 ---- REQUERIMIENTOS ---
 Ejercicio 1 (2pts) Numeros primos: 
 Crear un script (javascript/nodejs) que reciba un rango entre A y B y a partir de este rango se muestren en pantalla los números primos:
   - Ej: Para el rango entre 1 y 10, los números primos serán 2,3,5 y 7.
 ------------------------
 `);

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Please enter the first number : ", (answer1) => {
  readline.question("Please enter the second number : ", (answer2) => {
    getPrimeNumbers(answer1, answer2);
    readline.close();
  });
});

const getPrimeNumbers = (A, B) => {
  let prime_num_store = [];
  const numA = parseInt(A);
  const numB = parseInt(B);
  const validation = validateNumbers(numA, numB);
  if (validation !== "ok") {
    console.log(validation);
    return validation;
  } else {
    for (let i = numA; i <= numB; i++) {
      findPrime(i) && prime_num_store.push(i);
    }
    console.log(prime_num_store);
    return prime_num_store;
  }
};

const findPrime = (numero) => {
  for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero < 2 ? false : true;
};
const validateNumbers = (numA, numB) => {
  return !/^[0-9.,]+$/.test(numA) || !/^[0-9.,]+$/.test(numB)
    ? "Oops... Only numeric characters."
    : numA > numB
    ? "Wow... The last number must be higher."
    : "ok";
};
