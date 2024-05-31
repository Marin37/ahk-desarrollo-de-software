class Alumno {

    nombre;
    apellido;
    legajo;
    fechaNacimiento;
    localizacion;

    notas = [];

    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    nombreCompleto() {
        return this.nombre + this.apellido
    }
    saludar() {console.log("Hola soy", this.nombreCompleto())}
    saludarA(nombre) {"Hola", nombre,"soy", this.nombreCompleto()}
    saludarAAlumno(otroAlumno) {"Hola", otroAlumno.nombreCompleto(),"soy",this.nombreCompleto()}

    dameTuEdad() {
        const fechaActual = new Date();
        const diaAct = fechaActual.getDay();
        const mesAct = fechaActual.getMonth();
        const anioAct = fechaActual.getFullYear();

        const datosNacimiento = new Date(this.fechaNacimiento);
        const diaNac = datosNacimiento.getDay();
        const mesNac = datosNacimiento.getMonth();
        const anioNac = datosNacimiento.getFullYear();

        const edad = anioAct - anioNac;
        if(mesNac > mesAct) {edad--}
        else if(mesNac == mesAct && diaNac > diaAct) {edad--}

        return edad;
    }

    // promedio gral del curso
    // cada alumno tiene 2 calificaciones

    vivisCercaDe(otroAlumno) {
        return this.localizacion.distanciaHasta(otroAlumno.localizacion) < 20;
    }

}