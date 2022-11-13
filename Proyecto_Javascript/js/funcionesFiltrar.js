function filtrar() {
    var contenido = event.target.value;
    var listaFiltrada = listaMoviles.filter(elemento => elemento.modelo.toLowerCase().includes(contenido.toLowerCase()));
    cargarListaMoviles(listaFiltrada)
}

document.getElementById("searchForm").addEventListener("keyup", filtrar);