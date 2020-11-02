var arrayInt = [];

function initializeArrays(arraysSize, minAge){
    arraysSize = parseInt(arraysSize);
    minAge = parseInt(minAge);
    arrayInt = new Array();
    for (let i = 0; i < arraysSize; i++ ) {
        //arrayStr.push(characters.charAt(Math.floor(Math.random() * characters.length)));
        arrayInt.push(minAge + Math.floor(60 * Math.random()));
        //arrayFloat.push(parseFloat((100000 * Math.random()).toFixed(2)));
    }
    document.getElementById("arrayNumerico").innerHTML = arrayInt;
}

initializeArrays(30, 18);


function punto1() {
    var index = 0;
    while (index<arrayInt.length) {
        console.log(arrayInt[index]);
        index++;
    }
    document.getElementById("respuesta1").innerHTML = "Ver consola (f12).";
}


function punto2() {
    for (let i = 0; i < arrayInt.length; i++) {
        if (arrayInt[i]%2 === 0){
            console.log(arrayInt[i]);
        }
        
    }
    document.getElementById("respuesta2").innerHTML = "Ver consola (f12).";
}


function punto3() {  
    document.getElementById("respuesta3").innerHTML = `El estudiante menor tiene ${arrayMin(arrayInt)} años.`;
}

function arrayMin(arrayInt) {
    return Math.min(...arrayInt);
}


function punto4() {
    document.getElementById("respuesta4").innerHTML = `El estudiante mayor tiene ${arrayMax(arrayInt)} años.`;
}

function arrayMax(arrayInt) {
    return Math.max(...arrayInt);
}


function punto5() {
    var numero = Number(prompt(`Por favor ingrese un número entre 1 y ${arrayInt.length}:`));

    document.getElementById("respuesta5").innerHTML = `El número del indice ingresado es ${arrayInt[numero-1]}`;
}


function punto6() {
    document.getElementById("respuesta6").innerHTML = `Los números repetidos son: ${arrayRepeated(arrayInt)}`;
}

function arrayRepeated(arrayInt) {
    return arrayInt.filter((item, index) => arrayInt.indexOf(item) != index)
}

function punto7() {
    var myColor = ["Red", "Green", "White", "Black"];

    document.getElementById("respuesta7").innerHTML = `Elementos concatenados: ${myColor.join(", ")}`;
}

function cuadrado(numero) {
    return numero * numero;
}


function punto8(numero) {
    var invertido = "";
    for (let i = numero.length-1; i >=0; i--) {
        invertido += numero.charAt(i);
    }

    document.getElementById("respuesta8").innerHTML = `El valor ingresado al revés es: ${invertido}`;
}


function punto9(texto) {
    var arrayTexto = texto.split("");
    var letras = arrayTexto.filter(letter => letter!=" ");
    document.getElementById("respuesta9").innerHTML = `Las letras ordenadas son: ${letras.sort()}`;
}


function punto10(texto) {
    var arrayTexto = texto.split(" ");

    for (let i = 0; i < arrayTexto.length; i++) {
        arrayTexto[i] = arrayTexto[i].charAt(0).toUpperCase() + arrayTexto[i].substring(1);
    }   

    document.getElementById("respuesta10").innerHTML = `Texto en Title Case: ${arrayTexto.join(" ")}`;
}


function punto11(texto) {
    var arrayTexto = texto.split(" ");

    var largo = 0;
    var respuesta = "";
    for (let i = 0; i < arrayTexto.length; i++) {
        if (largo<arrayTexto[i].length){
            largo = arrayTexto[i].length;
            respuesta = arrayTexto[i];    
        }
    }    
    document.getElementById("respuesta11").innerHTML = `La palabra mas larga es: ${respuesta}`;
}
