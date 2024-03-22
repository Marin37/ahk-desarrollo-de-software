/*
 * crear una fx que reciba un array como parametro y devuelva un nuevo array sin numActual duplicados 
 */
var arrEjemplo = [1,2,3,6,7,3,3,6,2,3,4,5,8,9,3,5,7,2,3,1,5,6,8,2,1,4,2,5,2,3,2,3];

function elimDuplicadosTrampa(arr) {
    var resp = new Set(arr);
    return resp;
}

function elimDuplicados(arr) {
    var resp = [];

    for( i = 0 ; i < arr.length; i++) {
        // if (!valorEstaEnArray(arr[i], resp)) {
        //     resp.push(arr[i]);
        // }
        if (!resp.includes(arr[i])) {
            resp.push(arr[i]);
        }
    }

    return resp;
}

function valorEstaEnArray(val, arr) {
    var enc = false;

    var i = 0;
    while (i < arr.length && !enc) {
        if (val == arr[i]) {enc = true};
        i++;
    }

    return enc;
}

// console.log(elimDuplicadosTrampa(arrEjemplo));
// console.log(elimDuplicados(arrEjemplo));

/* 
 * crear fx q recibe cadena como param y devuelva string invertido 
 * crear fx q recibe palabra como param y devuelva cantidad de vocales 
*/

function invertirTexto(texto) {
    var textoInvertido = "";
    
    for(var i = texto.length-1; i >= 0; i--) {
        textoInvertido += texto[i];
    }

    return textoInvertido;
}

function getCantidadVocales(texto) {
    var cantVocales = 0;
    // const VOCALES = ["a","e","i","o","u"];

    for( t = 0; t < texto.length; t++ ) {
        if (esVocal(texto[t])) {cantVocales++}
    }

    // for( t = 0; t < texto.length; t++ ) {
    //     if (texto[t].includes(VOCALES)) {cantVocales++}
    // } 

    return cantVocales;
}
function esVocal(texto) {
    const VOCALES = "aeiou";
    var resp = false;
    var v = 0;
    while ( v < VOCALES.length && !resp ) {
        if(texto.includes(VOCALES[v])) {resp = true}
        v++;
    }
    return resp;
}
// console.log(invertirTexto("negocio"));
// console.log(getCantidadVocales("negocio"));

/*
 * fx palabra capicua
 * fx calcule factorial num !num
 * fx(arraydenum) return numero mas repetido, si existe colision devolver cualq
 * fx(palabra,letra) cantidad de veces que aparece la letra en la palabra
 */

function esCapicua(palabra) {
    return palabra == invertirTexto(palabra);
};

console.log(esCapicua("neuquen"));

function factorial(num) {
    var result = 1;
    for (var i = 1; i <= num; i++) {
        result *= i
    }
    return result;
}

console.log(factorial(4));
console.log(factorial(5));

function calcNumeroMasRepetido(arrayNum) {
    var numMasRepetido = arrayNum[0];
    var numerosSinRepetir = [arrayNum[0]]
    var cantRepeticiones = [1];

    // llena los arrays con los numeros y su cantidad de ocurrencias
    for (var i = 1; i < arrayNum.length; i++) {
        const numActual = arrayNum[i];
        if (!numerosSinRepetir.includes(numActual)) {
            numerosSinRepetir.push(numActual);
            cantRepeticiones.push(1);
        } else {
            indice = numerosSinRepetir.indexOf(numActual);
            cantRepeticiones[indice]++;
        }
    }

    // devuelve el mayor elemento del array de ocurrencias
    maxIndice = calcMaxIndice(cantRepeticiones);
    numMasRepetido = arrayNum[maxIndice];

    return numMasRepetido;
}

function calcMaxIndice(arrayNum) {
    var numMax = arrayNum[0];
    var posMax = 0;

    for (var i = 1; i < arrayNum.length; i++) {
        if(arrayNum[i] > numMax) {
            numMax = arrayNum[i];
            posMax = i;
        }
    }
    return posMax;
}

n = [1,2,3,4,5,6,6,7,2,5,3,6,6,2,2,2,2,2,2,2,2,2,2];
n2 = [1,2,5,7,7,2,2,7,7,44,7,7,3];
console.log(calcNumeroMasRepetido(n), "= 2");
console.log(calcNumeroMasRepetido(n2), "= 7");

function calcCantVecesApareceLetra(palabra, letra) {
    var cantRepeticiones = 0;
    for (let i = 0; i < palabra.length; i++) {
        cantRepeticiones += (letra == palabra[i]) ? 1 : 0;
    }
    return cantRepeticiones;
}
console.log(calcCantVecesApareceLetra("papaya","a"))