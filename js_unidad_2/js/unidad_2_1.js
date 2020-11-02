function punto1() {
    var repeat = Number(prompt("Por favor ingrese un número:"));
    func1(repeat);
    document.getElementById("respuesta1").innerHTML = "Ver consola (f12)";
}

function func1(repeat) {
    for (let i = 0; i < repeat; i++) {
        console.log("Bienvenidos al curso Full Stack");
    }
}


function punto2() {
    var numUno = Number(document.getElementById("num_1").value);
    var numDos = Number(document.getElementById("num_2").value);

    document.getElementById("respuesta2").innerHTML = `El mayor de los números ingresados es: ${func2(numUno, numDos)}`;
}

function func2(numUno, numDos) {
    if (numUno > numDos) {
        return numUno;
    } else {
        return numDos;
    }
}


function punto3() {
    var numTres = Number(document.getElementById("num_3").value);
    var numCuatro = Number(document.getElementById("num_4").value);
    var numCinco = Number(document.getElementById("num_5").value);

    document.getElementById("respuesta3").innerHTML = `El promedio entre ${numTres} ${numCuatro} y ${numCinco} es: ${func3(numTres, numCuatro, numCinco)}`;
}

function func3(numUno, numDos, numTres) {
    return (numUno + numDos + numTres) / 3;
}


function punto4() {
    //Al leer como Number me suma strings
    var notas = prompt("Por favor ingrese las notas:");
    var suma = 0;
    var cantidad = 0;

    while (notas != -1) {
        var nota = parseFloat(notas);
        if (isNaN(nota)) {
            alert("No ingresó una nota, intente nuevamente");
        } else {
            suma += nota;
            cantidad++;
        }

        notas = prompt("Por favor ingrese otra nota:");
    }

    document.getElementById("respuesta4").innerHTML = `El promedio de las notas es: ${suma / cantidad}`;
}


function punto5() {
    var numero = Number(prompt("Por favor ingrese un número:"));

    document.getElementById("respuesta5").innerHTML = `El número siguiente al ingresado es ${siguiente(numero)}`;
}

function siguiente(numero) {
    return ++numero;
}


function punto6() {
    var numero = Number(prompt("Por favor ingrese un número:"));

    document.getElementById("respuesta6").innerHTML = `El doble del número ingresado es ${doble(numero)}`;
}

function doble(numero) {
    return numero + numero;
}


function punto7() {
    var numero = Number(prompt("Por favor ingrese un número:"));

    document.getElementById("respuesta7").innerHTML = `El cuadrado del número ingresado es ${cuadrado(numero)}`;
}

function cuadrado(numero) {
    return numero * numero;
}


function punto8() {
    var numero = Number(prompt("Por favor ingrese un número:"));

    document.getElementById("respuesta8").innerHTML = `El siguiente, doble y cuadrado del número ingresado son ${imprimirValores(numero)}`;
}

function imprimirValores(numero) {
    return `${siguiente(numero)}, ${doble(numero)} y ${cuadrado(numero)}`;

}


function punto9() {
    var numero = Number(prompt("Por favor ingrese un número:"));

    document.getElementById("respuesta9").innerHTML = `El siguiente del doble del número ingresado es ${imprimirElDobleDelSiguiente(numero)}`;
}

function imprimirElDobleDelSiguiente(numero) {
    return siguiente(doble(numero));
}


function punto10() {
    var numero = Number(prompt("Por favor ingrese un número:"));

    document.getElementById("respuesta10").innerHTML = `El doble del siguiente al cuadrado es ${imprimirElDobleDelSiguienteAlCuadrado(numero)}`;

}

function imprimirElDobleDelSiguienteAlCuadrado(numero) {
    return doble(cuadrado(siguiente(numero)));
}


function punto11() {
    var lado = parseInt(document.getElementById("num_6").value);

    document.getElementById("respuesta11").innerHTML = `El perimetro del cuadrado es ${perimetro(lado)} cm`;
}

function perimetro(lado) {
    return lado * 4;
}


function punto12() {
    var lado = parseInt(document.getElementById("num_7").value);

    document.getElementById("respuesta12").innerHTML = `El area del cuadrado es ${area(lado)} cm²`;
}

function area(lado) {
    return lado * lado;
}


function punto13() {
    var radio = parseInt(document.getElementById("num_8").value);

    document.getElementById("respuesta13").innerHTML = `El la circunferencia es ${circunferencia(radio)} cm`;
}

function circunferencia(radio) {
    return (2 * Math.PI) * radio;
}


function punto14() {
    var radio = parseInt(document.getElementById("num_8").value);

    document.getElementById("respuesta14").innerHTML = `El area del circulo es ${areaCiruclo(radio)} cm²`;
}

function areaCiruclo(radio) {
    return Math.PI * (radio * radio);
}


function punto15() {
    var fecha = document.getElementById("input_date").value.split("-");
    var month = fecha[1];

    //fuerza el 2019 que no es bisiesto
    document.getElementById("respuesta15").innerHTML = `El mes ${month} tiene ${diasDelMes(2019, month)} dias`;
}

function diasDelMes(year, month, day = 0) {
    return new Date(year, month, day).getDate();
}


function punto16() {
    var fecha = document.getElementById("input_date").value.split("-");
    var year = fecha[0];
    var respuesta = bisiesto(year) ? "es" : "no es";

    document.getElementById("respuesta16").innerHTML = `El año ${year} ${respuesta} bisiesto`;
}

function bisiesto(year) {
    if (diasDelMes(year, 2) == 28) {
        return false;
    } else {
        return true;
    }
}


function punto17() {
    var fecha = document.getElementById("input_date").value.split("-");
    var year = fecha[0];
    var month = fecha[1];

    document.getElementById("respuesta17").innerHTML = `El mes ${month} del año ${year} tiene ${diasDelMes(year, month)} dias`;
}


function punto18() {
    var fecha = document.getElementById("input_date").value;
    var fechaSplit = fecha.split("-");
    var year = fechaSplit[0];
    var month = parseInt(fechaSplit[1]) - 1; //mes 0-11
    var day = fechaSplit[2];

    var tomorrow = modificarDias(new Date(year, month, day), 86400000);

    document.getElementById("respuesta18").innerHTML = `Hoy es ${fecha}, mañana es: ${tomorrow.toISOString().split('T')[0]}`;
}


function punto19() {
    var fecha = document.getElementById("input_date").value;
    var fechaSplit = fecha.split("-");
    var year = fechaSplit[0];
    var month = parseInt(fechaSplit[1]) - 1; //mes 0-11
    var day = fechaSplit[2];

    var yesterday = modificarDias(new Date(year, month, day), -86400000);
    document.getElementById("respuesta19").innerHTML = `Hoy es ${fecha}, ayer fue: ${yesterday.toISOString().split('T')[0]}`;
}

function modificarDias(fecha, dias) {
    return new Date(fecha.getTime() + dias);
}


function punto20() {
    var fecha = document.getElementById("input_date").value.split("-");
    var diaMaximo = diasDelMes(fecha[0], fecha[1]);
    var diaSemana = new Date(fecha[0], parseInt(fecha[1]) - 1, diaMaximo).getDay();

    document.getElementById("respuesta20").innerHTML = `El ultimo día del mes ${fecha[0]}-${fecha[1]} es: ${diaDeSemana(diaSemana)}`;
}

function diaDeSemana(dia) {
    switch (dia) {
        case 0:
            return "Domingo";
            break;
        case 1:
            return "Lunes";
            break;
        case 2:
            return "Martes";
            break;
        case 3:
            return "Miércoles";
            break;
        case 4:
            return "Jueves";
            break;
        case 5:
            return "Viernes";
            break;
        case 6:
            return "Sábado";
            break;
        default:
            return "Dia inválido";
            break;
    }
}