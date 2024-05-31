import { Materia } from "../clases/modulo-2/entidades/materia";
import { MateriaPromocionable } from "../clases/modulo-2/entidades/materiaPromocionable";
import { Calificacion } from "../clases/modulo-2/entidades/calificacion";

// las voy a usar en various test
var analisisMatematico;
var disenioDeSistemas;


// los test deben ser atomicos y aislados entre asi
// entonces inicializo cada vez para que no 
beforeEach( () => {
    analisisMatematico = new MateriaPromocionable();
    disenioDeSistemas = new Materia();
});

test ("con 8 y 8 promociono Analisis Matematico", () => {
    const nota1 = new Calificacion(8,1);
    const nota2 = new Calificacion(8,1);
    const calificaciones = [nota1,nota2];

    expect(
        analisisMatematico.estaPromocionada(calificaciones)
    ).toBeTruthy();
});

test ("con 8 y 8 no promociono Disenio de Sistemas", () => {
    const nota1 = new Calificacion(8,1);
    const nota2 = new Calificacion(8,1);
    const calificaciones = [nota1,nota2];

    expect(
        disenioDeSistemas.estaPromocionada(calificaciones)
    ).toBeFalsy();
});
test ("con 6 y 7 apruebo Disenio de Sistemas", () => {
    const nota1 = new Calificacion(6,1);
    const nota2 = new Calificacion(7,1);
    const calificaciones = [nota1,nota2];

    expect(
        disenioDeSistemas.estaAprobada(calificaciones)
    ).toBeTruthy();
});

test ("queHago", () => {

});