/*
 * 13. Hacer un programa que, en primer lugar, le pida al usuario que ingrese un número, y que luego le muestre las
 * siguientes opciones:
 *   a) Aplicar suma: si selecciona esta opción, se le deberá pedir que ingrese otro número y mostrar el resultado.
 *      Al mostrar el resultado, se le deberá preguntar si quiere seguir sumando: si responde que sí, se deberá
 *      sumar el valor que se especifique; si responde que no, se deberá volver al menú principal.
 *   b) Aplicar resta: si selecciona esta opción, se le deberá pedir que ingrese otro número y mostrar el resultado.
 *   c) Transformar a número romano: si selecciona esta opción, se le deberá mostrar el número romano
 *      equivalente.
 *   d) Potenciar: si selecciona esta opción, se le deberá pedir que ingrese otro número que será el exponente al
 *      que se debe elevar el número inicial.
 * Se deberá tener en cuenta que, en todos los casos, siempre se debe volver al menú principal luego de ejecutar
 * la opción seleccionada.
 * Además, deberá agregarse una opción de salir: cuando se seleccione esta opción, se deberá mostrar por
 * pantalla todas las operaciones que realizó el usuario
 */
const TEXTO_MENU = "\n  (1) Aplicar suma 👍\n  (2) Aplicar resta 👎\n  (3) Transformar a romano 🙏\n  (4) Potenciar 💪\n  (0) Salir ⛔"

function ejecutarProgramaCalculadora() {
    var opcion, num;
    console.log("Bienvenido a lamejorcalculadora.com");
    var historial = [];

    num = pedirNum("Ingrese numero a operar");

    while (opcion != 0) {
        opcion = pedirOpc("Ingrese una opcion:" + TEXTO_MENU, 0, 5);

        // TODO switch case con opciones
        switch (opcion) {
            case 1:
                num = ejecutarSuma(num, historial);
                break;
            case 2:
                num = ejecutarResta(num, historial);
                break;
            case 3:
                ejecutarTransfRomano(num, historial);
                break;
            case 4:
                num = ejecutarPotencia(num, historial);
                break;
            case 0:
                mostrarHistorial(historial);
                alert("hasta la proxima 😔👌");
                break;
        }
    }

    return 0;
}

function pedirNum(mje) {
    do {
        num = parseInt(prompt(mje));
    } while (!Number.isInteger(num));
    return num;
}
function pedirOpc(mje, min, max) {
    do {
        pedirNum(mje);
    } while (num > max || num < min);
    return num;
}

function ejecutarSuma(num, historial) {
    do {
        otroNum = pedirNum("Ingrese el numero a sumar");
        console.log("Aplicando suma...");
        resp = num + otroNum;
        mensaje = "Sumar " + num + " + " + otroNum + " = " + resp;

        num = resp;
        console.log(mensaje);
        historial.push(mensaje);
    } while (pedirOpc("Sigue sumando? Si (1) - No (0)", 0, 1) == 1);
    return resp;
}
function ejecutarResta(num, historial) {
    otroNum = pedirNum("Ingrese el numero a restar");
    console.log("Aplicando resta...");
    resp = num - otroNum;
    mensaje = "Restar " + num + " - " + otroNum + " = " + resp;

    console.log(mensaje);
    historial.push(mensaje);
    return resp;
}
function ejecutarPotencia(num, historial) {
    otroNum = pedirNum("Ingrese el numero a potenciar");
    console.log("Potenciando...");
    resp = num ** otroNum;
    mensaje = "Potenciar " + num + "^" + otroNum + " = " + resp;

    console.log(mensaje);
    historial.push(mensaje);
    return resp;
}
function ejecutarTransfRomano(num, historial) {
    const ROMAN_LTR = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I",
    ];
    const ROMAN_NUM = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    var resp = "";
    var numAuxiliar = num;

    console.log("Transformando a numero romano...");
    var i = 0;
    while (i < ROMAN_LTR.length) {
        if (numAuxiliar >= ROMAN_NUM[i]) {
            numAuxiliar -= ROMAN_NUM[i];
            resp = resp + ROMAN_LTR[i];
        } else if (numAuxiliar < ROMAN_NUM[i]) {
            i++;
        }
    }
    mensaje = "En romano " + num + " = " + resp;
    console.log(mensaje);
    historial.push(mensaje);
}

function mostrarHistorial(historial) {
    if (historial.length == 0) { console.log("No se realizaron operaciones") }
    for (i = 0; i < historial.length; i++) {
        console.log(historial[i]);
    }
}
ejecutarProgramaCalculadora();