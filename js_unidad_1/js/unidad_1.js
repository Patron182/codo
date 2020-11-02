function punto1() {
    alert("Hello World");
}

function punto2() {
    document.getElementById("respuesta2").innerHTML = "Hello World";
}

function punto3() {
    document.getElementById("respuesta3").innerHTML = 3 + 5;
}

function punto4() {
    var username = prompt("Por favor ingrese su nombre:");
    document.getElementById("respuesta4").innerHTML = "Hola " + username;
}

var num_1;
var num_2;
function punto5() {
    num_1 = parseInt(document.getElementById("num_1").value);
    num_2 = parseInt(document.getElementById("num_2").value);
    document.getElementById("respuesta5").innerHTML = num_1 + num_2;
}

function punto6() {
    document.getElementById("respuesta6").innerHTML = "El mayor entre los primeros números ingresados es: " + num_1 > num_2 ? num_1 : num_2;
}


function punto7() {
    var num_3 = document.getElementById("num_3").value;
    var num_4 = document.getElementById("num_4").value;
    var num_5 = document.getElementById("num_5").value;
    var arrar_numeros = [num_3, num_4, num_5];
    var num_mayor = arrar_numeros.sort().pop();
    document.getElementById("respuesta7").innerHTML = "El mayor de los tres números ingresados es: " + num_mayor;
}

function punto8() {
    var num_6 = parseInt(document.getElementById("num_6").value);
    document.getElementById("respuesta8").innerHTML = "El número ingresado " + (num_6 % 2 === 0 ? "es" : "no es") + " divisible por dos.";
}

function punto9() {
    var frase = document.getElementById("str_1").value;
    document.getElementById("respuesta9").innerHTML = "La letra 'a' aparece " + frase.match(/a/g).length + " veces en la frase ingresada.";
}

function punto10() {
    var frase = document.getElementById("str_1").value;
    var frase_vocales = frase.match(/[aeiou]/g);
    document.getElementById("respuesta10").innerHTML = "Las vocales que aparecen son " + frase_vocales;

}

function punto11() {
    var frase = document.getElementById("str_1").value;
    var frase_vocales = frase.match(/[aeiou]/g);
    document.getElementById("respuesta11").innerHTML = "Las vocales aparecen " + frase_vocales.length + " veces en la frase ingresada.";
}

function punto12() {
    var frase = document.getElementById("str_1").value;
    var frase_vocales = frase.match(/[aeiou]/g).sort();

    var map_vocales = new Map();
    var vocal;
    for (let i = 0; i < frase_vocales.length; i++) {
        if (vocal != frase_vocales[i]) {
            map_vocales.set(frase_vocales[i], 1);
        } else {
            map_vocales.set(frase_vocales[i], map_vocales.get(frase_vocales[i]) + 1);
        }
        vocal = frase_vocales[i];
    }

    var str = "";
    map_vocales.forEach((values, keys) => {
        str += "La vocal '" + keys + "' aparece " + values + " veces. ";
    });
    document.getElementById("respuesta12").innerHTML = str;
}

function punto13() {
    var num_7 = parseInt(document.getElementById("num_7").value);
    var divisible_por = "El numero " + num_7;
    if (num_7 % 2 === 0 || num_7 % 3 === 0 || num_7 % 5 === 0 || num_7 % 7 === 0) {
        divisible_por += " es divisible por 2, 3, 5 o 7";
    } else {
        divisible_por += " no es divisible por 2, 3, 5 o 7";
    }

    document.getElementById("respuesta13").innerHTML = divisible_por;

}

function punto14() {
    var num_8 = parseInt(document.getElementById("num_8").value);
    var divisible_por = "El numero " + num_8 + " es divisible por:";
    if (num_8 % 2 === 0) {
        divisible_por += " 2";
    }
    if (num_8 % 3 === 0) {
        divisible_por += " 3";
    }
    if (num_8 % 5 === 0) {
        divisible_por += " 5";
    }
    if (num_8 % 7 === 0) {
        divisible_por += " 7";
    }

    document.getElementById("respuesta14").innerHTML = divisible_por;
}

function punto15() {
    var num_8 = parseInt(document.getElementById("num_8").value);
    var divisible_por = "El numero " + num_8 + " es divisible por:";

    for (let divisor = num_8; divisor > 1; divisor--) {
        if (num_8 % divisor === 0) {
            divisible_por += " " + divisor;
        }
    }
    document.getElementById("respuesta15").innerHTML = divisible_por;
}

function punto16() {
    var num_9 = parseInt(document.getElementById("num_9").value);
    var num_10 = parseInt(document.getElementById("num_10").value);
    var mensaje = "Los divisores comunes de " + num_9 + " y " + num_10 + " son: ";

    var divisores_1 = [];
    for (let divisor = num_9; divisor > 1; divisor--) {
        if (num_9 % divisor === 0) {
            divisores_1.push(divisor);
        }
    }

    var divisores_2 = [];
    for (let divisor = num_10; divisor > 1; divisor--) {
        if (num_10 % divisor === 0) {
            divisores_2.push(divisor);
        }
    }

    var divisores = divisores_1.concat(divisores_2);
    var divisores_comunes = divisores.filter((item, index) => divisores.indexOf(item) != index);
    document.getElementById("respuesta16").innerHTML = mensaje + (divisores_comunes.length > 0 ? divisores_comunes : "Ninguno.");
}

function punto17() {
    var num_11 = parseInt(document.getElementById("num_11").value);
    var mensaje = "El número " + num_11;

    var esPrimo = true;
    for (let divisor = num_11 - 1; divisor > 1; divisor--) {
        if (num_11 % divisor === 0) {
            esPrimo = false;
        }
    }
    document.getElementById("respuesta17").innerHTML = mensaje + (esPrimo ? " es primo." : " no es primo.");
}

function punto18() {
    var num_12 = parseInt(document.getElementById("num_12").value);
    document.getElementById("respuesta18").innerHTML = num_12 >= 18 ? "Puedes conducir." : "No puedes conducir.";
}

function punto19() {
    var num_13 = parseInt(document.getElementById("num_13").value);
    var mensaje;
    switch (num_13) {
        case 0:
        case 1:
        case 2:
            mensaje = "Muy Deficiente";
            break;
        case 3:
        case 4:
        case 5:
            mensaje = "Insuficiente";
            break;
        case 6:
        case 7:
            mensaje = "Bien";
            break;
        case 8:
        case 9:
            mensaje = "Notable";
            break;
        case 10:
            mensaje = "Sobresaliente";
            break;
        default:
            mensaje = "Nota inválida";
            break;
    }

    document.getElementById("respuesta19").innerHTML = mensaje;
}

function punto20() {
    var frase = prompt("Por favor ingrese una frase:");
    var frases = "";
    while (frase != null) {
        if (frases === "") {
            frases += frase;
        } else {
            frases += " - " + frase;
        }

        frase = prompt("Por favor ingrese otra frase:");
    }

    document.getElementById("respuesta20").innerHTML = frases;
}

function punto21() {
    var numeros = prompt("Por favor ingrese un número:");
    var suma = 0;
    while (numeros != null) {
        var entero = parseInt(numeros);
        if (isNaN(entero)) {
            alert("No ingresó un número, intente nuevamente");
        } else {
            suma += entero;
        }

        numeros = prompt("Por favor ingrese otro número:");
    }

    document.getElementById("respuesta21").innerHTML = "Suma total de los números ingresados: " + suma;
}

function punto22() {
    var dni = parseInt(document.getElementById("num_14").value);
    var mensaje = "";

    if (dni < 0 || dni > 99999999) {
        mensaje = "DNI no válido";
    } else {
        var resto = Math.floor(dni % 23);

        switch (resto) {
            case 1:
                mensaje = "T";
                break;
            case 2:
                mensaje = "R";
                break;
            case 3:
                mensaje = "W";
                break;
            case 4:
                mensaje = "A";
                break;
            case 5:
                mensaje = "G";
                break;
            case 6:
                mensaje = "M";
                break;
            case 7:
                mensaje = "Y";
                break;
            case 8:
                mensaje = "F";
                break;
            case 9:
                mensaje = "P";
                break;
            case 10:
                mensaje = "D";
                break;
            case 11:
                mensaje = "X";
                break;
            case 12:
                mensaje = "B";
                break;
            case 13:
                mensaje = "N";
                break;
            case 14:
                mensaje = "J";
                break;
            case 15:
                mensaje = "Z";
                break;
            case 16:
                mensaje = "S";
                break;
            case 17:
                mensaje = "Q";
                break;
            case 18:
                mensaje = "V";
                break;
            case 19:
                mensaje = "H";
                break;
            case 20:
                mensaje = "L";
                break;
            case 21:
                mensaje = "C";
                break;
            case 22:
                mensaje = "K";
                break;
            case 23:
                mensaje = "E";
                break;
            default:
                mensaje = "No se puede calcular";
                break;
        }
    }
    document.getElementById("respuesta22").innerHTML = mensaje;
}

function punto23() {
    for (let i = 0; i <= 30; i++) {
        console.log(''.padStart(i, i));
    }
    document.getElementById("respuesta23").innerHTML = "Ver consola (f12)";
}

function punto24() {
    var num_15 = parseInt(document.getElementById("num_15").value);
    for (let i = num_15; i > 0; i--) {
        console.log(''.padStart(i, i));
    }
    document.getElementById("respuesta24").innerHTML = "Ver consola (f12)";
}

function punto25() {
    var num_16 = parseInt(document.getElementById("num_16").value);

    if (num_16 <= 50) {
        for (let i = 0; i <= num_16; i++) {
            console.log(''.padStart(i, i));
        }
    }

    document.getElementById("respuesta25").innerHTML = num_16>50?"Número mayor a 50":"Ver consola (f12)";
}

function punto26() {
        for (let i = 1  ; i <= 500; i++) {
            var multiplos = "";
            if (i % 4 === 0) {
                multiplos = " Multiplo de 4";
            }
            if (i % 9 === 0) {
                multiplos = " Multiplo de 9";
            }
            
            console.log(i + multiplos);

            if (i % 5 === 0) {
                console.log('-----------------');
            }
        }

    document.getElementById("respuesta26").innerHTML = "Ver consola (f12)";
}