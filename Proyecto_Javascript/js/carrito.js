var carrito = document.getElementsByClassName('carrito')[0];
carrito.addEventListener("click",pintarCarrito);

function pintarCarrito(){
    var carrito=document.getElementById("carrito")
    if(!document.getElementById("carrito-box")){
        var div = document.createElement("div");
        div.id="carrito-box";
        carrito.appendChild(div);
        var h1=document.createElement("h1");
        h1.innerHTML="Cesta";
        div.appendChild(h1);
        cargarListaCarrito(listaObjetoCarrito);

    }else{
        carrito.removeChild(document.getElementById("carrito-box"));
    }
   
}