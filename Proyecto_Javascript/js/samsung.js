
listaMoviles = [];

window.onload = () => {
    cargarListaMoviles(listaMoviles);
    pintarTabla(listaMoviles);
    comprobarEstadoUsuario();
}

function cargarListaMoviles(lista) {
    lista.push(new Movil("Samsung", "s10", "6.1", "3600mah", "300"));
    lista.push(new Movil("Samsung", "s20", "6.1", "3800mah", "600"));
    lista.push(new Movil("Samsung", "s20-Ultra", "6.8", "4000mah", "799"));
    lista.push(new Movil("Samsung", "s21", "6.7", "4200mah", "800"));
    lista.push(new Movil("Samsung", "s22-Ultra", "6.8", "4500mah", "999"));

}

function pintarTabla(lista) {
    var div = document.getElementById("tabla-content");
    if (!document.getElementById("tablaObjetoMoviles")) {
        var tabla = document.createElement("table");
        var tbody = document.createElement('tbody');
        tabla.id = "tablaObjetoMoviles";
        tbody.innerHTML += `<tr>
                            <th>Marca</th>
                            <th>Modelo</th>
                            <th>Pantalla</th>
                            <th>Bateria</th>
                            <th>price</th>
                            <th>Comprar</th>
                            <tr>`
        lista.forEach((movil, pos) => {
            tbody.innerHTML += `<tr>
                            <td>${movil.marca}</td>
                            <td>${movil.modelo}</td>
                            <td>${movil.pantalla}</td>
                            <td>${movil.bateria}</td>
                            <td>${movil.price}</td>
                            <td onclick="AgregarAlCarrito(${pos});"><button type="button" id="btnAgrgarCarrito">+</button></td>
                            <tr>`;

        })
        tabla.appendChild(tbody);
        div.appendChild(tabla);
    }
}


// var btnAgrgarCarrito=document.getElementById()