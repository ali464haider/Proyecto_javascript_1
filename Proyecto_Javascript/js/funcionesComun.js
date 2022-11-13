let listaObjetoCarrito = [];

let carritoCompra = [];


function cargarObjetosPagina(){
    listaObjetoCarrito = [];
    carritoCompra = [];
    if (JSON.parse(localStorage.getItem("compra")).length>0) {
        carritoCompra = JSON.parse(localStorage.getItem("compra"));
        carritoCompra.forEach(objeto => {
                listaObjetoCarrito.push(objeto);
        })
    }
}


function AgregarAlCarrito(pos) {

    cargarObjetosPagina();

    objeto = listaMoviles[pos];


    if (listaObjetoCarrito.findIndex(movil => movil.modelo == objeto.modelo) ==-1) {
        objeto.cantidad = 1;
        listaObjetoCarrito.push(objeto);
    } else {
        var posMovil = listaObjetoCarrito.findIndex(movil => movil.modelo == objeto.modelo);
        listaObjetoCarrito[posMovil].cantidad++;
    }


    cargarListaCarrito(listaObjetoCarrito);



}



function cargarListaCarrito(lista) {




    let precioFInalProductos = 0;

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



    lista.forEach((objeto, pos) => {
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
        var img = document.createElement("img");
        img.setAttribute("src", "images/borrar.png")
        img.addEventListener("click", () => borrarProducto(pos));
        td.appendChild(img);
        tr.appendChild(td);





        tabla.appendChild(tr);

        let precioProducto = (objeto.cantidad * objeto.price);

        return precioFInalProductos += precioProducto;
    })

    localStorage.setItem("compra", JSON.stringify(lista));

    localStorage.setItem("precioFinal", JSON.stringify(precioFInalProductos));

    carritoCompra=JSON.parse(localStorage.getItem("compra"));



    div.appendChild(tabla);
    if (!document.getElementById("precioTotal")) {
        var p = document.createElement('p');
        p.id = "precioTotal";
    } else {
        var p = document.getElementById("precioTotal");
    }

    p.innerHTML = "Precio Total:";

    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("size", "1");
    input.value = precioFInalProductos + "€";
    p.appendChild(input);

    div.appendChild(p);


    if (!document.getElementById("btn-pagar")) {
        var btn = document.createElement("button");
        var input = document.getElementById("precioTotal");
        btn.id = "btn-pagar";
        btn.innerHTML = "Ir A Pagar";
        var a = document.createElement('a');
        a.setAttribute("href", "paginaPagar.html");
        a.appendChild(btn);
        input.append(a);

        if (!document.getElementById("btn-vaciar")) {
            btn = document.createElement("button");
            btn.innerHTML = "Vaciar Carrito";
            btn.addEventListener("click", vaciarCarrito);
            btn.id = "btn-vaciar"
            input.appendChild(btn);
        }



    }

}

function borrarProducto(pos) {
    listaObjetoCarrito.splice(pos, 1);
    cargarListaCarrito(listaObjetoCarrito);
}

function vaciarCarrito() {
    localStorage.removeItem("compra");
    localStorage.removeItem("precioFinal");
    listaObjetoCarrito = [];
    carritoCompra = [];
    cargarListaCarrito(listaObjetoCarrito);
}



