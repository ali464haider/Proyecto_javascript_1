

listaMoviles = [];

window.onload = () => {
    
    if(localStorage.getItem("contador")==null){
        cargarListaMoviles(listaMoviles);
        pintarTabla(listaMoviles);
        comprobarEstadoUsuario();
    }
      

        localStorage.setItem("Contador","1");
    

    
  
}

function cargarListaMoviles(lista) {
    lista.push(new Movil("Xiaomi", "Mi 7", "6.1", "3600mah", "300"));
    lista.push(new Movil("Xiaomi", "Mi 8", "6.1", "3800mah", "600"));
    lista.push(new Movil("Xiaomi", "Mi 10", "6.8", "4000mah", "799"));
    lista.push(new Movil("Xiaomi", "Mi 11", "6.7", "4200mah", "800"));
    lista.push(new Movil("Xiaomi", "Mi 12", "6.8", "4500mah", "999"));

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


