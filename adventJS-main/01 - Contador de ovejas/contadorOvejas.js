'use strict';


/*
Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. Haz una función que devuelva una lista con todas las ovejas que sean de color rojo y que además su nombre contenga tanto las letras n Y a, sin importar el orden, las mayúsculas o espacios.
*/

const FORM = document.getElementById("oveja_form");
const NAME= document.getElementById("oveja_name");
const COLOR= document.getElementById("oveja_color");
const LIST = document.getElementById("data_container"); 
const LIST_FILTER = document.getElementById("sheep_list_filter"); 
const COUNTER_BTN = document.getElementById("counter");
let fragment = document.createDocumentFragment();

let sheepObejct=[];


 FORM.onsubmit = function(e){
    e.preventDefault();
   if(validator(NAME, COLOR)){
     let sheep = {name: NAME.value, color: COLOR.value}
     showAddData(sheep, LIST);
     sheepObejct.push(sheep);
     FORM.reset();
   }
 }


//Show info added on screen
const showAddData = (obj, elemt)=>{
  let li = document.createElement("li");
 li.classList="sheep_img_ctn";
  li.innerHTML=`<img src="src/${obj.color}.png" class="sheep_img_size"><span>${obj.name}</span>`;
  elemt.appendChild(li);
}

// filter sheep list
COUNTER_BTN.onclick = function(){
  LIST_FILTER.innerHTML="";
  if(sheepObejct.length != 0){    
    let filterSheep = contarOvejas(sheepObejct);
    filterSheep.forEach(sheep=>{
    showAddData(sheep, LIST_FILTER);
  })
  }
}





/********************************************** */



// RETO de Advenjs

const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'},
    { name: 'AAAAAaaaaa', color: 'rojo' },
    { name: 'Nnnnnnnn', color: 'rojo'},
    { name: 'Martin', color: 'rojo'}
  ]
  
 function contarOvejas(ovejas) {
    // aquí tu magia
    let newOvejas=[];
    ovejas.forEach((ovejaInfo, i)=> {
      if(ovejaInfo.color.toLowerCase() =='rojo' && ovejaInfo.name.toLowerCase().includes('n') && ovejaInfo.name.toLowerCase().includes('a')){
        newOvejas.push(ovejas[i])
      }
    });
    return newOvejas;
  }

const ovejasFiltradas = contarOvejas(ovejas);
console.group("Resultado del reto");
console.log("Este console log es parte del resultado del codigo del reto, la parte de agregar las ovejas es adicional al mismo.");
console.group("Ovejas sin filtrar");
console.log(ovejas);
console.groupEnd();
console.group("Ovejas filtradas");
console.log(ovejasFiltradas);
console.groupEnd();
console.groupEnd();


