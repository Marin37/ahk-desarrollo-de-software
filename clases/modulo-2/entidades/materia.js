export class Materia {
    nombre;

    // Entra coleccion de calificaciones y sale otra filtrada
    calificacionesPrimeraVuelta(calificaciones) {

        return calificaciones.filter(c => c.sosDePrimeraInstancia());
    }

    // ver si la materia esta aprobada/promocionada en base a las calificaciones
    estaPromocionada(calificaciones) {
        return false;
    }

    estaAprobada(calificaciones) {
        return calificaciones
            .filter(c => c.notaMayorEqualANum(6))
            .length >= 2
    }
}