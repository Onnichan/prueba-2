"use strict";
const GI = {
  createElement(tag, atributes) {
    let element = document;
    return document.createElement(tag);
  },
};

const listaDesordenada = document.querySelector(".js-cont-todo");
const checkbox = document.querySelectorAll(".checkbox");
const listItem = document.querySelectorAll(".list-item");

const to_do = [
  "Alimentar al perro",
  "Estudiar para prueba escrita",
  "Pagar taxes",
  "Pasear a perro",
  "Comprar entradas para el cine",
];


let listaRender = "<ul>";
to_do.forEach((item) => {
    listaRender += `<li class="list-item">${item}<input type="checkbox" class="checkbox"></li>`
})
locationbar += "</ul>"

listaDesordenada.innerHTML = listaRender;

checkbox.forEach((check) => {
    check.addEventListener("click", () => {
        listItem.forEach((list) => {
            list.addEventListener("", () => {
                list.style.display = "text-decoration: line-through; color: gray;";
            })
        })
    })
})

