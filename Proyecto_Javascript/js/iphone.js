
listaMoviles = [];

window.onload = () => {
    cargarListaMoviles(listaMoviles);
    pintarTabla(listaMoviles);
    comprobarEstadoUsuario();
}

function cargarListaMoviles(lista) {
    lista.push(new Movil("Iphone", "X", "6.1", "2800mah", "400"));
    lista.push(new Movil("Iphone", "11", "6.1", "2800mah", "599"));
    lista.push(new Movil("Iphone", "12", "6.1", "3000mah", "899"));
    lista.push(new Movil("Iphone", "13 pro max", "6.7", "4320mah", "1259"));
    lista.push(new Movil("Iphone", "14 pro max", "6.7", "4320mah", "1459"));

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