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