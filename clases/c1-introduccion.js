// var txt = "XD";
// txt = "no da risa";
// var mastxt = "el chiste viene en DLC?";

// console.log(txt);
// console.log(mastxt);

// txt = "equisde";
// console.log(txt, typeof(txt));
// mastxt = 42;
// console.log(mastxt, typeof(mastxt));

// var num = 40;
// var otronum = 2;
// var res = num + otronum;

// console.log(res);
// const edadMin = 18;
// var edadMika = 18;
// var esMayorDeEdad = edadMika >= edadMin;

// console.log(esMayorDeEdad, typeof(esMayorDeEdad));

// var signoMika = "piscis";
// var isPiscis = signoMika == "piscis"
// var isPiscisMayor = esMayorDeEdad && isPiscis

// console.log(isPiscisMayor, typeof(isPiscisMayor));

// ? cómo aprueba el alumno?
// * para poder aprobar la cursada el alumno debe aprobar ambos parciales
// ? con cuanto aprueba un alumno?
// * el alumno aprueba con una nota >= 6

// const notaMin = 6;

// var notaPrimerParcial = 3;
// var notaSegundoParcial = 8;

// var aprobado = (notaPrimerParcial >= notaMin) && (notaSegundoParcial >= notaMin);
// console.log(aprobado);

// function aprueba(nota) { return nota >= notaMin }

// var alumnoAprobado = aprueba(notaPrimerParcial) && aprueba(notaSegundoParcial);
// console.log(alumnoAprobado);

// * quiero saber si la cursada está aprobada
// ? cómo está aprobada?
// * cuando aprueba los dos parciales en cualquiera de las instancias
// ? qué instancias?
// * hay un recuperatorio por parcial
// todo ejemplo

// const notaMin = 6;

// var notaPrimerParcialInst1 = 5;
// var notaPrimerParcialInst2 = 7;

// var notaSegundoParcialInst1 = 2;
// var notaSegundoParcialInst2 = 5.5;

// var aproboPrimerParcial = (notaPrimerParcialInst1 >= notaMin) || (notaPrimerParcialInst2 >= notaMin);
// var aproboSegundoParcial = (notaSegundoParcialInst1 >= notaMin) || (notaSegundoParcialInst2 >= notaMin);

// var alumnoAprobado = aproboPrimerParcial && aproboSegundoParcial
// console.log(alumnoAprobado);

// * ahora quiero que si aprobó le diga "sos un capo bro, tas aprobado"

// if(alumnoAprobado) {
//     console.log( "sos un capo bro, tas aprobado 😎" );
// } else {
//     console.log( "pedilo bro, recursaste 😞" );
// }

// const NOTA_MINIMA_APROBACION = 6;
// var notas = [[2, 7], [5]];
// function apruebaExamen(nota, notaMin) {
//     return nota >= NOTA_MINIMA_APROBACION;
// }

// function apruebaParcial(inst1, inst2) {
//     return apruebaExamen(inst1) || apruebaExamen(inst2);
// }

// function apruebaCursada(nota1, notaRecu1, nota2, notaRecu2) {
//     return (
//         apruebaParcial(nota1, notaRecu1, NOTA_MINIMA_APROBACION) &&
//         apruebaParcial(nota2, notaRecu2, NOTA_MINIMA_APROBACION)
//     );
// }

// TODO Desarrollar una función que, dado dos números, nos diga si son múltiplos.

// function sonMultiplos(num1, num2) {
//     return num1 % num2 == 0 || num2 % num1 == 0;
// }

// console.log(sonMultiplos(7, 49));
// console.log(sonMultiplos(9, 3));
// console.log(sonMultiplos(5, 69));
// console.log(sonMultiplos(1, 0));

// TODO Se ingresa un número con el formato YYYYMMDD. A partir de ese número mostrar el año (YYYY), el mes (MM) y el día (DD).
function mostrarFechaEnTexto(fecha) {
    var dia = fecha % 100;
    fecha = (fecha - dia) / 100;
    var mes = fecha % 100;
    fecha = (fecha - mes) / 100;
    var anio = fecha % 10000;

    console.log("año", anio, "mes", mes, "dia", dia);
}

// mostrarFechaEnTexto("20001024");
// mostrarFechaEnTexto("20250512");
// mostrarFechaEnTexto(20040413);

/*
    TODO Desarrollar una función que calcule el máximo común divisor (MCD) entre dos números unNumero otroNumero, teniendo en cuenta el siguiente algoritmo:
        * a. Dividir unNumero por otroNumero, y calcular el resto sabiendo que éste siempre cumple con: 0 < R < otroNumero
        * b. Si R==0 entonces el MCD es otroNumero; sino seguir a paso C
        * c. Reemplazar unNumero por otroNumero, otroNumero por R y volver al paso A
 */

function calcularMCD(unNumero, otroNumero) {
    var resto;
    while (resto != 0) {
        resto = unNumero % otroNumero;
        unNumero = otroNumero;
        otroNumero = resto;
    }
    console.log(unNumero);
}

// calcularMCD(144, 120);
// calcularMCD(256, 512);