
listaMoviles = [];

window.onload = () => {
    cargarListaMoviles(listaMoviles);
    pintarTabla(listaMoviles);
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

let listaObjetoCarrito = [];

function AgregarAlCarrito(pos) {
    objeto = listaMoviles[pos];


    if (!listaObjetoCarrito.includes(objeto)) {
        objeto.cantidad = 1;
        listaObjetoCarrito.push(objeto);
    } else {
        var posMovil = listaObjetoCarrito.findIndex(movil => movil.modelo == objeto.modelo);
        listaObjetoCarrito[posMovil].cantidad++;
    }





    cargarListaCarrito(listaObjetoCarrito);



}



function cargarListaCarrito(lista) {

    let precioFInalProductos=0;

    if (!document.getElementById("carrito-box")) {
        pintarCarrito();
    }
    var div = document.getElementById("carrito-box");

    if (!document.getElementById("carritoTabla")) {
        var tabla = document.createElement("table");
        tabla.id = "carritoTabla";

    } else {
        var tabla = document.getElementById("carritoTabla");
    }


    tabla.innerHTML = "";

    var trHeader = document.createElement("tr");
    var th = document.createElement("th");
    th.innerHTML = "Marca";
    trHeader.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Modelo";
    trHeader.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Precio";
    trHeader.appendChild(th);

    th = document.createElement("th");
    th.innerHTML = "Cantidad";
    trHeader.appendChild(th);

    tabla.appendChild(trHeader);



    lista.forEach((objeto,pos) => {
        var tr = document.createElement("tr");
        var td = document.createElement("td");
        td.innerHTML = objeto.marca;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = objeto.modelo;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = objeto.price;
        tr.appendChild(td);

        td = document.createElement("td");
        td.innerHTML = objeto.cantidad;
        tr.appendChild(td);

        td = document.createElement("td");
        var img=document.createElement("img");
        img.setAttribute("src","images/borrar.png")
        img.addEventListener("click",() => borrarProducto(pos));
        td.appendChild(img);
        tr.appendChild(td);

        
        
        

        tabla.appendChild(tr);

        let precioProducto=(objeto.cantidad*objeto.price);

        return precioFInalProductos+=precioProducto;
    })

    localStorage.setItem("compra",JSON.stringify(listaObjetoCarrito));

    localStorage.setItem("precioFinal",JSON.stringify(precioFInalProductos));



    div.appendChild(tabla);
    if(!document.getElementById("precioTotal")){
        var p=document.createElement('p');
        p.id="precioTotal";
    }else{
        var p=document.getElementById("precioTotal");
    }
    
    p.innerHTML="Precio Total:";

    var input=document.createElement("input");
    input.setAttribute("type","text");
    input.setAttribute("size","1");
    input.value=precioFInalProductos+"€";
    p.appendChild(input);

    div.appendChild(p);


    if(!document.getElementById("btn-pagar")){
        var btn=document.createElement("button");
        var input=document.getElementById("precioTotal");
        btn.id="btn-pagar";
        btn.innerHTML="Ir A Pagar";
        var a=document.createElement('a');
        a.setAttribute("href","paginaPagar.html");
        a.appendChild(btn);
        input.append(a);
    }

}

function borrarProducto(pos){
    listaObjetoCarrito.splice(pos,1);
    cargarListaCarrito(listaObjetoCarrito);
}
// var btnAgrgarCarrito=document.getElementById()