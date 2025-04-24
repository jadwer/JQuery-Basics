// alert("Hola Mundo desde un script externo.");
console.log("Carga el script");

let content = document.getElementById("content");

let divTitle = document.createElement("div");
let title = document.createElement("h1");
let titleText = document.createTextNode("Mi primer script en JavaScript");

title.appendChild(titleText);
divTitle.appendChild(title);
content.appendChild(divTitle);

let divP1 = document.createElement("div");
let p1 = document.createElement("p");
let p1Text = document.createTextNode("Este es un párrafo creado desde JavaScript.");
p1.appendChild(p1Text); 
divP1.appendChild(p1);
content.appendChild(divP1);

let divOL = document.createElement("div");
let ol = document.createElement("ol");
let li1 = document.createElement("li");
let li1Text = document.createTextNode("Elemento 1 de la lista ordenada.");
li1.appendChild(li1Text);
ol.appendChild(li1);
let li2 = document.createElement("li");
let li2Text = document.createTextNode("Elemento 2 de la lista ordenada.");
li2.appendChild(li2Text);
ol.appendChild(li2);
let li3 = document.createElement("li");
let li3Text = document.createTextNode("Elemento 3 de la lista ordenada.");
li3.appendChild(li3Text);
ol.appendChild(li3);
divOL.appendChild(ol);
content.appendChild(divOL);

let divP2 = document.createElement("div");
let p2 = document.createElement("p");
let p2Text = document.createTextNode("Este es otro párrafo creado desde JavaScript.");
p2.appendChild(p2Text);
divP2.appendChild(p2);
content.appendChild(divP2);


let divUL = document.createElement("div");
let ul = document.createElement("ul");
let li4 = document.createElement("li");
let li4Text = document.createTextNode("Elemento 1 de la lista desordenada.");
li4.appendChild(li4Text);
ul.appendChild(li4);
let li5 = document.createElement("li");
let li5Text = document.createTextNode("Elemento 2 de la lista desordenada.");
li5.appendChild(li5Text);
ul.appendChild(li5);
let li6 = document.createElement("li");
let li6Text = document.createTextNode("Elemento 3 de la lista desordenada.");
li6.appendChild(li6Text);
ul.appendChild(li6);
divUL.appendChild(ul);

content.appendChild(divUL);

// let body = document.getElementsByTagName("body")[0];
// body.appendChild(divUL);

/*
let divContent2 = document.querySelector("#content2");
let divTitle2 = document.createElement("div");
let title2 = document.createElement("h1");
let titleText2 = document.createTextNode("Mi segundo script en JavaScript");
title2.appendChild(titleText2);
divTitle2.appendChild(title2);
divContent2.appendChild(divTitle2);
*/

// Selectores: id, class, tagName
// por tagName 
// Antes se usaba document.getElementsByTagName("div")[0];
// Ahora se usa document.querySelector("div");
// const div = $("div"); // Selecciona el primer div
// por id 
// Antes se usaba document.getElementById("content");
// Ahora se usa document.querySelector("#content");
// const content = $("#content"); // Selecciona el div con id "content"
// por clase 
// Antes se usaba document.getElementsByClassName("clase")[0];
// Ahora se usa document.querySelector(".clase");
// const clase = $(".clase"); // Selecciona el primer elemento con la clase "clase"

// <div class="clase" id="example"> </div>
// document.querySelector("#example"); // id
// document.querySelector(".clase"); // class
// document.querySelector("div"); // tagName

// <p class="parrafo" id="resumen"> Mi resumen</p>
// <p class="resumen" id="parrafo"> Mi parrafo</p>




/*
const mySelector = (selector) => { return document.querySelector(selector); };

let divContent2 = mySelector("#content2");
let title2 = document.createElement("h1");
title2.textContent = "Mi segundo script en JavaScript";
divContent2.appendChild(title2);
*/

const $ = selector => document.querySelector(selector);

let divContent2 = $("#content2");
let title2 = document.createElement("h1");
title2.textContent = "Mi segundo script en JavaScript";
divContent2.appendChild(title2);



content.appendChild(document.createElement("div").appendChild(document.createElement("p").appendChild(document.createTextNode("Este es otro párrafo creado desde JavaScript en una sola linea."))));
