//variables
var uno = document.getElementById("uno");
var dos = document.getElementById("dos");
var tres = document.getElementById("tres");
var cuatro = document.getElementById("cuatro");
var cinco = document.getElementById("cinco");
var seis = document. getElementById("seis");

var number = document.getElementById("number");
var white = document.getElementById("white");
var math = document.getElementById("math");
var ciencias = document.getElementById("ciencias");
var fisica = document.getElementById("fisica");
var fruit_1 = document.getElementById("fruit_1");
var fruit_2 = document.getElementById("fruit_2");
var fruit_3 = document.getElementById("fruit_3");
var name = document.getElementById("name");
var result = document.getElementById("result");

// pedir numero de 1 a 100 y mostrar desde el uno hasta numero seleccionado
//. Solicitar al usuario un número entre 1 al 100. Luego, se deberá imprimir por consola los números
//desde el 0 hasta el número que ingresó el usuario.
uno.onclick = function(e){
 valorNumero = prompt("ingresa un numero de 1 a 100");
 if (isNaN(valorNumero)) {
     alert("no es un número válido");
 } else if(valorNumero > 100 || valorNumero < 0){
     alert("debe ser un numero entre 1 y 100");
 } else{
     for ( i = 1; i <= valorNumero ; i++) {
         console.log(i);
         
     }
 }

}

// respuesta esperada blanco si no volver a preguntar
dos.onclick = function(e){
    prompt("¿de qué color es el caballo blanco de napoleón?");
}
// pedir notas y promediar matematicas ciencias fisica
tres.onclick = function(e){
    prompt("en proceso");
}
//pedir 3 frutas de manera individual e imprimir todas juntas excepto "manzana"
cuatro.onclick = function(e){
    alert("en proceso");
}
//pedir nombre y separar vocales de consonantes y mostrar con un alert este resultado
cinco.onclick = function(e){
    alert("en proceso");
}

seis.onclick = function(e){
    alert("selecciona otra opción");
}