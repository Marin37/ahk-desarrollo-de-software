export class Cursada{
    alumno;
    curso;
    calificaciones; //coleccion de objetos (tengo notas y descripcion de notas)

    nstructor(alumno,curso){
        this.alumno=alumno;
        this.curso=curso;
        this.calificaciones=[];
    }

    agregarCalificacion(unaCalificacion){
        this.calificaciones.push(unaCalificacion);
    }

    promedio(){
        var sumaPromedios=0;
        for(var i=0;i<this.calificaciones.length;i++){
            sumaPromedios+=this.calificaciones[i].nota;
        }
        return sumaPromedios/this.calificaciones.length;
    }

    fueAprobada(){
        return this.curso.materia.estaAprobada(this.calificaciones);
    }
    fuePromocionada(){
        return this.curso.materia.estaPromocionada(this.calificaciones);
    }


}
