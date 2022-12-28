"use strict";
const GI = {
  createElement(tag, atributes) {
    let element = document;
    return document.createElement(tag);
  },
};

const listaDesordenada = document.querySelector(".js-cont-todo");


const to_do = [
  "Alimentar al perro",
  "Estudiar para prueba escrita",
  "Pagar taxes",
  "Pasear a perro",
  "Comprar entradas para el cine",
];


let listaRender = "<ul></ul>"

listaDesordenada.innerHTML = listaRender;
