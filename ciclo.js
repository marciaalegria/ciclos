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

    do {
        var respuesta= prompt("¿De qué color es el caballo blanco de napoleón?")
        } while (respuesta.toLowerCase() !="blanco");

}

// pedir notas y promediar matematicas ciencias fisica
tres.onclick = function(e){
    valor_1 = prompt("ingresa promedio ciencias");
    valor_2 = prompt("ingresa promedio fisica");
    valor_3 = prompt("ingresa promedio matematicas");
    nota1= parseInt(valor_1);
    nota2= parseInt(valor_2);
    nota3 = parseInt(valor_3);

    prom = nota1 + nota2 + nota3;
    final = prom / 3;
    console.log(final);
}
//pedir 3 frutas de manera individual e imprimir todas juntas por consola excepto "manzana"
cuatro.onclick = function(e){
    let frutas = [];
    var fruta_1= prompt("menciona una fruta");
    if (fruta_1 == "manzana") {
        fruta_1 ="";
    } else {
        frutas.push(fruta_1);
    }
     
    fruta_2= prompt("ingresa una segunda fruta");
    if (fruta_2 == "manzana") {
        fruta_2 ="";
    } else {
        frutas.push(fruta_2);
    }
    
    fruta_3= prompt("ingresa una tercera fruta");
    if (fruta_3 == "manzana") {
        fruta_3 ="";
    } else {
        frutas.push(fruta_3);
    }
      console.log(frutas);

}
//pedir nombre y separar vocales de consonantes y mostrar con un alert este resultado
cinco.onclick = function(e){
    let nombre = prompt("ingresa tu primer nombre");
    let vocales = [];
    let consonantes = [];
    

    for(i of nombre){
        if ( i == "a" || i == "e" || i == "i" || i =="o" || i =="u"){
            vocales.push(i);
        } else {
            consonantes.push(i);
        }
    }
   alert("tu nombre tiene " + vocales.length + " vocales y " + consonantes.length + " consonantes" )

}

seis.onclick = function(e){
    alert("selecciona otra opción");
}