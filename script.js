//alert("Hola este es mi Javascript");
/*
let nombre = "Marta";
nombre="Ana";

var nombre1 = "Angel";
//nombre1="Tobby";

const nombre2 = "Marta";
//nombre2="Mar";

console.log(nombre);
console.log(nombre1);
console.log(nombre2);
*/

let contenidoTitulo = "Nombre";

let titulo = document.querySelector(".acerca-de .diferente");
titulo.innerHTML = contenidoTitulo;

//Condicionales
let textotitulo = titulo.innerText;
console.log(textotitulo);

if (textotitulo=="Nombre"){
    titulo.innerHTML ="Otro";
} else {
    console.log("no se cumple");
}

let nombre1 ="Ani";
let ciudad1 ="Bs As";
let gusto1= "chocolate";

let parrafo = document.querySelector (".parrafo2");

function cambiarTexto (nombre,ciudad,gusto){
    let contenido = "Me llamo Angel, nací en Lima y vivo en Callao. Me gusta el helado y salir a pasear en días de sol. Me encantaría aprender a programar para poder ayudar a las personas a mostrar lo que hacen";
    return contenido;
}

parrafo.innertext = cambiarTexto (nombre1, ciudad1,gusto1);

