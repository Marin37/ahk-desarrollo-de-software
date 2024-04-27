function calcularMCD(unNumero, otroNumero) {
    var resto;
    while (resto != 0) {
        resto = unNumero % otroNumero;
        unNumero = otroNumero;
        otroNumero = resto
    }
    return unNumero;
}

// console.log(calcularMCD(144, 120));

function altCalcularMCD(unNumero, otroNumero) {

    var resto = unNumero % otroNumero;

    if (resto == 0) { return otroNumero }
    else {
        unNumero = otroNumero;
        otroNumero = resto;
        altCalcularMCD(unNumero, otroNumero);
    }
}

// console.log(altCalcularMCD(144, 120));


function mostrarMayorDeDos() {
    var num1 = prompt("Ingrese un numero: ");
    var num2 = prompt("Ingrese un numero: ");

    if (num1 >= num2) { return num1 }
    else { return num2 }

    console.log(num1, num2);
}

// mostrarMayorDeDos();

function mostrarMayorDeDosV1() {
    const NUM1 = prompt("Ingrese un numero: ");
    const NUM2 = prompt("Ingrese un numero: ");

    var numeroMayor;
    if (NUM1 >= NUM2) { numeroMayor = NUM1 }
    else { numeroMayor = NUM2 }
    return numeroMayor;
}

// console.log(mostrarMayorDeDos());

function mayorDe10NumPedidosAlUsuario() {
    var numeroMayor = -999999999999;

    for (i = 0; i < 10; i++) {
        const NUM = prompt("Ingrese un numero: ")
        if (NUM > numeroMayor) numeroMayor = NUM;
    }

    return numeroMayor;
}
// console.log(mayorDe10NumPedidosAlUsuario())

function mayorDeNNumPedidosAlUsuario() {
    const CANT_NUMEROS = prompt("¿Cuantos numeros quiere comparar? ")
    var numeroMayor = -999999999999;

    for (i = 0; i < CANT_NUMEROS; i++) {
        const NUM = prompt("Ingrese un numero: ");
        if (NUM > numeroMayor) numeroMayor = NUM;
    }

    return numeroMayor;
}
// console.log(mayorDeNNumPedidosAlUsuario(4)) */

const conjuntoDeN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function mayorDelConjunto(numeros) {
    var numMayor = -9999999999;

    for (i = 0; i < numeros.length; i++) {
        if (numeros[i] > numMayor) numMayor = numeros[i];
    }
    return numMayor;
}

// console.log(mayorDelConjunto(conjuntoDeN));

function mayorDelConjuntoHastaPrimerNegativo(numeros) {
    var numMayor = -9999999999;
    var i = 0;
    while (i < numeros.length && numeros[i] > 0) {
        if (numeros[i] > numMayor) numMayor = numeros[i];
        i++;
    }
    return numMayor;
}

// console.log(mayorDelConjuntoHastaPrimerNegativo([100, 400, 500, -10, 9999]))

/*  
    * Dados 50 números enteros, informar 
    * el promedio de los mayores que 100 
    * la suma de los menores que –10
    * por pantalla. 
*/

function sumarTodos(numeros) {
    var suma = 0;
    for (i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }
    return suma;
}

function calcularPromedio(numeros) {
    return sumarTodos(numeros) / numeros.length;
}

function mostrarPromedioMayoresYMenores(numeros) {
    var i = 0;
    var numMayores100 = [];
    var numMenores_10 = [];

    while (i < numeros.length) {
        if (numeros[i] > 100) {
            numMayores100.push(numeros[i]);
        } else if (numeros[i] < 10) {
            numMenores_10.push(numeros[i]);
        }
        i++;
    }

    console.log(
        "Promedeio de los mayores de 100",
        calcularPromedio(numMayores100)
    );
    console.log("Suma de los menores de 100", sumarTodos(numMenores_10));
}

// mostrarPromedioMayoresYMenores([1000, -50, -30, 2000, -54, 100]);

/* 4. Dado un valor numérico entero m, determinar e imprimir un listado con los m primeros 
múltiplos de 3 que no sean múltiplos de 5. */

function esMultiploDe(numero, multDe) {
    return numero % multDe == 0;
}

function mostrarPrimerosMultiplos(m, numSeaMult, numNoSeaMult) {
    var i = 1;
    var numEncontrados = 0;
    var listado = [];
    while (numEncontrados < m) {
        num = i * numSeaMult;
        if (!esMultiploDe(num, numNoSeaMult)) {
            listado.push(num);
            numEncontrados++;
        }
        i++;
    }
    console.log(listado);
}

// mostrarPrimerosMultiplos(10,3,5)

/* 7) Se ingresa un conjunto de valores positivos terminado con un valor negativo. 
Se pide desarrollar el programa que imprima el valor máximo del conjunto y su 
posición relativa dentro del mismo (el número de orden en el que fue ingresado). */

function mostrarMaximoDelConjunto() {
    var numMax = 0;
    var posMax = 0;
    var posRel = 0;

    var num = 0;
    while (num >= 0) {
        num = prompt("ingrese numero");
        posRel++;
        if (num > numMax) {
            numMax = num;
            posMax = posRel;
        }
    }

    console.log("El maximo es", numMax, " en la posicion", posMax);
}

// mostrarMaximoDelConjunto();

/* Desarrollar la función unificarFecha que recibe tres parámetros
que representan el día, mes y año de una fecha y retorna la fecha
unificada en un entero largo de 8 dígitos con el siguiente formato: aaaammdd */

function unificarFecha(dia, mes, anio) {
    return dia + mes * 100 + anio * 10000;
}
// console.log(unificarFecha(15, 3, 2024))

/* Dado un número entero que representa una suma de dinero, desarrollar un programa que indique qué
cantidades de billetes de $1000, $500, $200, $100, $50, $20, $10 y monedas de $5, $2, $1 
se deben utilizar para alcanzar dicho monto, dando prioridad a los billetes de mayor valor. */

function traduciraEfectivo(monto) {
    const VALORES = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var billetes = [];

    var cycles = 0;

    // creo un array vacio
    for (i = 0; i < VALORES.length; i++) {
        billetes[i] = 0;
    }

    // calcula cantidad de billetes
    var i = 0;
    while (i < VALORES.length) {
        if (monto >= VALORES[i]) {
            monto -= VALORES[i];
            billetes[i] += 1;
        } else if (monto < VALORES[i]) {
            i++;
        }
        cycles++;
    }
    imprimirDeADos(billetes, VALORES);
}

function imprimirDeADos(conj1, conj2) {
    for (i = 0; i < conj1.length && i < conj2.length; i++) {
        if (conj2[i] != 0) {
            console.log(conj1[i], "x", conj2[i]);
        }
    }
}
traduciraEfectivo(3418);

function traduciraEfectivoAlt(monto) {
    const VALORES = [1000, 500, 200, 100, 50, 20, 10, 5, 2, 1];
    var billetes = [];
    
    // creo un array vacio
    for (i = 0; i < VALORES.length; i++) {
        billetes[i] = 0;
    }
    
    // calcula cantidad de billetes
    var i = 0;
    while (i < VALORES.length) {
        if (monto >= VALORES[i]) {
            monto -= VALORES[i];
            billetes[i] += 1;
        } else if (monto < VALORES[i]) {
            i++;
        }
    }
    imprimirDeADos(billetes, VALORES);
}
traduciraEfectivo(3418);


// 8,9,12,13
/* 8.
 * 8 Desarrollar una función que, dado dos números, nos diga si son múltiplos
 * 9 Desarrollar la función pow que recibe una base y un exponente y retorne la potencia
 */

function sonMultiplos(num1, num2) {
    return num1 % num2 == 0 || num2 % num1 == 0;
}
function pow(base, exp) {
    return base ** exp;
}

/*
* console.log(sonMultiplos(2, 9));
console.log(sonMultiplos(2, 8));
console.log(sonMultiplos(8, 2));
console.log(pow(2, 8));
*/

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
