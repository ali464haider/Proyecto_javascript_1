
listaMoviles = [];

window.onload = () => {
    cargarListaMoviles(listaMoviles);
    pintarTabla(listaMoviles);
    comprobarEstadoUsuario();
}

function cargarListaMoviles(lista) {
    lista.push(new Movil("Huawei", "p30", "6.7", "3000mah", "200"));
    lista.push(new Movil("Huawei", "p40", "6.7", "3300mah", "250"));
    lista.push(new Movil("Huawei", "p50", "6.7", "3500mah", "400"));
    lista.push(new Movil("Huawei", "p60", "6.7", "4000mah", "600"));
    lista.push(new Movil("Huawei", "p80", "6.7", "4500mah", "800"));

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