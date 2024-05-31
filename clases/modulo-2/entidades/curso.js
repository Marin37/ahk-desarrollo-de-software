class Curso {

    nombreCurso;
    nombreDocente;
    cursadaDeAlumnos = [];
    materia;

    agregarAlumno(nuevoAlumno) {
        this.cursadaDeAlumnos.push(nuevoAlumno);
    }

    
    promedioEdadesAlumnos() {
        var sumaEdadesAlumnos = 0;
        for (let i = 0; i < this.cursadaDeAlumnos.length; i++) {
            sumaEdadesAlumnos += this.cursadaDeAlumnos[i].dameTuEdad();
        }
        // console.log("sumaEdadesAlumnos",sumaEdadesAlumnos);
        // console.log("promedio",promedio(sumaEdadesAlumnos, this.cursadaDeAlumnos.length));
        return promedio(sumaEdadesAlumnos, this.cursadaDeAlumnos.length);
    }

    hayAlumnosCerca() {
        algunoEncontrado = false;
        i = 0;
        while(i < this.cursadaDeAlumnos.length - 1 && !algunoEncontrado) {
            j = i+1;
            while(j < this.cursadaDeAlumnos.length && !algunoEncontrado) {
                algunoEncontrado = this.cursadaDeAlumnos[i].localizacion.vivisCercaDe(this.cursadaDeAlumnos[j].localizacion);
                j++;
            }
            i++;
        }
    }

    esCursoJoven() {
        return this.promedioEdadesAlumnos() < 25;
    }
}