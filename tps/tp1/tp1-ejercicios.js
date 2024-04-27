// * Ejercicio 1
// ! Sin usar split()
function convertirCadenaTitulo(texto) {
    res = "";

    for (i = 0; i < texto.length; i++) {
        if (i == 0 || texto[i - 1] == " ") {
            res += texto[i].toUpperCase();
        } else {
            res += texto[i];
        }
    }

    return res;
}
// console.log(convertirCadenaTitulo("mi amigo me invitó a comer"));

// * Ejercicio 2
// ! Sin usar split()
function concatenarArrayConSeparador(array, separador) {
    res = "";

    for (i = 0; i < array.length; i++) {
        res += i != 0 ? separador : "";
        res += array[i];
    }
    return res;
}
// console.log(concatenarArrayConSeparador(["hola", "mundo", "js"], " => "));

// * Ejercicio 3
// ! Sin usar split()
function revertirOrdenPalabras(texto) {
    result = "";
    palabras = obtenerPalabras(texto);

    // recorre al reves y agrega cada palabra con espacios
    for (i = palabras.length - 1; i >= 0; i--) {
        result += palabras[i];
        result += i != 0 ? " " : "";
    }

    return result;
}

function revertirOrdenPalabrasAlternativo(texto) {
    result = "";
    palabras = obtenerPalabras(texto);

    // mientras existan palabras, saco la ultima
    while (palabras.length) {
        result += palabras.pop();
        result += palabras.length ? " " : "";
    }

    return result;
}

function obtenerPalabras(texto) {
    res = [];
    palabra = "";

    for (i = 0; i < texto.length; i++) {
        if (i == 0 || texto[i] != " ") palabra += texto[i];
        else {
            res.push(palabra);
            palabra = "";
        }
    }

    return res;
}

// console.log(revertirOrdenPalabras("El sol brilla y el cielo está despejado"));
// console.log(revertirOrdenPalabrasAlternativo("El sol brilla y el cielo está despejado"));

// * Ejercicio 4
// ! Sin usar split()
function contarCantidadAparicionesTexto(texto, palabra) {
    palabras = obtenerPalabras(texto);
    res = 0;

    while (palabras.length) {
        if (palabras.pop().toLowerCase() == palabra.toLowerCase()) {
            res++;
        }
    }

    return res;
}
// console.log(contarCantidadAparicionesTexto("El sol brilla y el cielo está despejado","el"));

// * Ejercicio 5
// ! Sin usar split()
function terminaConSufijo(texto, sufijo) {
    if (texto.length < sufijo.length) return false;

    res = true;

    i = 0;
    while (res && i < sufijo.length) {
        sl = sufijo.length - 1;
        tl = texto.length - 1;
        if (sufijo[sl - i] != texto[tl - i]) {
            res = false;
        }
        i++;
    }

    return res;
}

// console.log(terminaConSufijo("parametrizacion", "cion"));
// console.log(terminaConSufijo("parametrizacion", "sion"));

// * Ejercicio 6
function eliminarEspaciosExternos(texto) {
    while (texto[0] == " ") {
        texto = texto.slice(1);
    }
    while (texto[texto.length - 1] == " ") {
        texto = texto.slice(0, -1);
    }
    return texto;
}

// console.log(eliminarEspaciosExternos("    ola      "));

// * Ejercicio 7
function extraerDominioDeEmail(email) {
    dominio = "";
    hayArroba = false;

    for (i = 0; i < email.length; i++) {
        if (hayArroba) dominio += email[i];
        if (email[i] == "@") hayArroba = true;
    }

    return dominio;
}

function extraerDominioDeEmailAlt(email) {
    return email.split("@").slice(-1)[0];
}
// console.log(extraerDominioDeEmail("johndoe@ahk.com.ar"));
// console.log(extraerDominioDeEmailAlt("johndoe@ahk.com.ar"));

// * Ejercicio 8
function combinarArraysAlternando(arr1, arr2) {
    res = [];

    for (i = 0; i < arr1.length || i < arr2.length; i++) {
        if (arr1[i]) res.push(arr1[i]);
        if (arr2[i]) res.push(arr2[i]);
    }

    return res;
}

// console.log(combinarArraysAlternando([1, 2, 3], ["a", "b", "c", "d", "e"]));

// * Ejercicio 9
function calcularImpuestos(edad, ingresos) {
    const EDADES = [18, 21, 31];
    const IMPUESTOS_POR_EDAD = [0.1, 0.15, 0.4];

    res = 0;

    i = 0;
    while (edad >= EDADES[i] && i < EDADES.length) {
        res = ingresos * IMPUESTOS_POR_EDAD[i];
        i++;
    }

    return res;
}

// console.log(2, calcularImpuestos(4, 1000));
// console.log(18, calcularImpuestos(18, 1000));
// console.log(30, calcularImpuestos(30, 1000));
// console.log(50, calcularImpuestos(50, 1000));

function cantidadDeLikesLegible(likes) {
    const CANTS_EN_LETRAS = ["M", "K"];
    const CANTS = [1000000, 1000];

    tieneLetra = false;
    res = "";

    i = 0;
    while (!tieneLetra && i < CANTS.length) {
        if (likes > CANTS[i]) {
            res = sacarDecimales(likes / CANTS[i], 1) + CANTS_EN_LETRAS[i];
            tieneLetra = true;
        }
        i++;
    }

    return res;
}

function sacarDecimales(num, cantDecimales) {
    return Math.floor(num * 10 ** cantDecimales) / 10 ** cantDecimales;
}

console.log(cantidadDeLikesLegible(1250000));
console.log(cantidadDeLikesLegible(34567));