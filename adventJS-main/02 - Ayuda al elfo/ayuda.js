'use strict';

/*
algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, que significa que está tachado y no se tiene que contar.

Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece.
*/

const carta = 'bici coche balón _playstation bici coche peluche  pelota';

function listGifts(letter) {
  // ¡Tú puedes!
  let cleanArray= letter.split(" ").filter(toy => (toy != "" && !toy.includes("_")));
  let objLetter={}
  cleanArray.forEach((toy)=>{
    (objLetter[toy]) ? objLetter[toy]+=1 : objLetter[toy]=1;
  })
  return objLetter
 }


const regalos = listGifts(carta)

console.log(regalos)
