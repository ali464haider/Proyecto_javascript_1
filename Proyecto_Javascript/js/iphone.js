
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
        var tr = document.createElement('tr');
        var th = document.createElement('th');
        var td = document.createElement('td');
        tabla.id = "tablaObjetoMoviles";


      

        th = document.createElement('th');
        th.innerHTML= "Marca";
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML= "Modelo";
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML= "Pantalla";
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML= "Bateria";
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML= "price";
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML= "Comprar";
        tr.appendChild(th);

        th = document.createElement('th');
        th.innerHTML= "Borrar";
        tr.appendChild(th);
        tabla.appendChild(tr);

       
        
        lista.forEach((movil, pos) => {
            tr = document.createElement('tr');
            td = document.createElement('td');
            td.innerHTML= movil.marca;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML= movil.modelo;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML= movil.pantalla;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML= movil.bateria;
            tr.appendChild(td);

            td = document.createElement('td');
            td.innerHTML= movil.price;
            tr.appendChild(td);

            td = document.createElement('td');
            var button = document.createElement("button");
            button.setAttribute("type","button");
            button.id="btnAgrgarCarrito";
            button.innerHTML="+";
            td.appendChild(button);
            td.addEventListener("click",()=>AgregarAlCarrito(pos));
            tr.appendChild(td);

            td = document.createElement('td');
            var img = document.createElement("img");
            img.setAttribute("src","images/borrar.png");
            td.appendChild(img);
            td.addEventListener("click",()=>borrarObjetoListaPrincipal(pos));
            tr.appendChild(td);
            tabla.appendChild(tr);

        })

       
        div.appendChild(tabla);
    } else {
        div.innerHTML="";
        pintarTabla(listaMoviles);
    }
}

function borrarObjetoListaPrincipal(pos){
    listaMoviles.splice(pos, 1);
    pintarTabla(listaMoviles);
    comprobarEstadoUsuario();
}


// var btnAgrgarCarrito=document.getElementById()