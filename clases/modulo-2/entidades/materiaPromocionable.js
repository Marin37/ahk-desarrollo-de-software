import { Materia } from "./materia";

export class MateriaPromocionable extends Materia{

    estaPromocionada(calificaciones) {
        return super
            .calificacionesPrimeraVuelta(calificaciones)
            .every( c => c.notaMayorEqualANum);
    }
}