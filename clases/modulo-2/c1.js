class Localizacion {

    latitud;
    longitud;

    constructor(latitud, longitud) {
        this.latitud = latitud;
        this.longitud = longitud;
    }

    distanciaHasta(otroPunto) {
        const x = otroPunto.latitud - this.latitud;
        const y = otroPunto.longitud - this.longitud;
        console.log(Math.sqrt(x*x+y*y));
        return Math.sqrt(x*x+y*y);
    }

}

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

class Curso {

    nombre;
    nombreDocente;
    alumnos = [];

    agregarAlumno(nuevoAlumno) {
        this.alumnos.push(nuevoAlumno);
    }

    
    promedioEdadesAlumnos() {
        var sumaEdadesAlumnos = 0;
        for (let i = 0; i < this.alumnos.length; i++) {
            sumaEdadesAlumnos += this.alumnos[i].dameTuEdad();
        }
        // console.log("sumaEdadesAlumnos",sumaEdadesAlumnos);
        // console.log("promedio",promedio(sumaEdadesAlumnos, this.alumnos.length));
        return promedio(sumaEdadesAlumnos, this.alumnos.length);
    }

    hayAlumnosCerca() {
        algunoEncontrado = false;
        i = 0;
        while(i < this.alumnos.length - 1 && !algunoEncontrado) {
            j = i+1;
            while(j < this.alumnos.length && !algunoEncontrado) {
                algunoEncontrado = this.alumnos[i].localizacion.vivisCercaDe(this.alumnos[j].localizacion);
                j++;
            }
            i++;
        }
    }

    esCursoJoven() {
        return this.promedioEdadesAlumnos() < 25;
    }
}

function promedio(total, cantidad) {
    return parseFloat(Math.round(total / cantidad,2));
}

const roberto = new Alumno("Roberto", "Perez");
const maria = new Alumno("Maria", "Lopez");
const nadia = new Alumno("Nadia", "Sanchez");

roberto.edad = "10/11/2003";
maria.edad = "15/6/2001";
nadia.edad = "29/7/2002";
roberto.localizacion = new Localizacion(10,25);
maria.localizacion = new Localizacion(20,30);
nadia.localizacion = new Localizacion(70,30);

const cursoDeDesarrollo = new Curso();
cursoDeDesarrollo.nombre = "Desarrollo de Software";
cursoDeDesarrollo.agregarAlumno(roberto);
cursoDeDesarrollo.agregarAlumno(maria);
cursoDeDesarrollo.agregarAlumno(nadia);

console.log("promedio de edades", cursoDeDesarrollo.promedioEdadesAlumnos());
console.log("maria vive cerca de roberto", maria.vivisCercaDe(roberto));
console.log("Es curso joven", cursoDeDesarrollo.esCursoJoven());