class Movil {
    constructor(marca, modelo, pantalla,bateria,price) {
        this.marca = marca || "Sin marca";
        this.modelo = modelo || "Sin modelo";
        this.price = price || "100";
        this.pantalla = pantalla || "0";
        this.bateria = bateria || "pantalla";
    }

    actualizarPrecio(precioNuevo) {
        this.price = precioNuevo;
    }
    cambiarModelo(nuevoModelo) {
        this.modelo = nuevoModelo;
    }
    cambiarMarca(nuevoMarca) {
        this.marca = nuevoMarca;
    }
}
