export class Calificacion {
    nota;
    descripción;
    numeroInstanciaEvaluacion;

    constructor(nota, numeroInstanciaEvaluacion) {
        this.nota = nota;
        this.numeroInstanciaEvaluacion = numeroInstanciaEvaluacion;
    }

    sosDePrimeraInstancia() {
        return this.numeroInstanciaEvaluacion === 1;
    }

    notaMayorEqualANum(unNumero) {
        return this.nota >= unNumero;
    }
}