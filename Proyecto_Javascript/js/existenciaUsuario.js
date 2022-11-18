
var btnLogin = document.getElementById("btn-entrar");
var btnRegistrar = document.getElementById("btn-registrar");
var divLogin = document.getElementById("login");



function volverAlEstado(){
    if(document.getElementById("btn-entrar")){
        document.getElementById("btn-entrar").addEventListener("click",() =>{
            location.href="login.html"
        }) ;
        if( document.getElementById("btn-registrar")){
            document.getElementById("btn-registrar").addEventListener("click",()=>{
                location.href="registrar.html"
            });
        }
  
    }
}

volverAlEstado();


var botonesLogin = divLogin.innerHTML;
if(document.getElementsByClassName("carrito")[0])
var carritoBox = document.getElementsByClassName("carrito")[0].innerHTML;

function comprobarEstadoUsuario(){
    if(sessionStorage.getItem("Usuario")!=null){
        var storageUsuario = JSON.parse(sessionStorage.getItem("Usuario"));
        divLogin.innerHTML="Usuario: "+storageUsuario.nombre;
        var btn = document.createElement("button");
        btn.addEventListener("click",() =>{
            divLogin.innerHTML = botonesLogin;
            if(document.getElementsByClassName("carrito")[0])
            document.getElementsByClassName("carrito")[0].innerHTML = carritoBox;
            volverAlEstado();
            sessionStorage.removeItem("Usuario");
            comprobarEstadoUsuario();
        })
        btn.innerHTML="Sign Out";
        divLogin.appendChild(btn);
        if(storageUsuario.role=="admin" && document.getElementsByClassName("carrito")[0]){
            document.getElementsByClassName("carrito")[0].innerHTML="";
        }
        if(storageUsuario.role=="admin"){
            var header=document.querySelector("#tablaObjetoMoviles tr th:last-child,td:last-child");
            header.style.visibility="visible";
            var filas=document.querySelectorAll("#tablaObjetoMoviles tr td:last-child");
            for(let i=0;i<filas.length;i++){
                filas[i].style.visibility="visible";
            }
            
        }
    }else{
        var header=document.querySelector("#tablaObjetoMoviles tr th:last-child,td:last-child");
            header.style.visibility="hidden";
            var filas=document.querySelectorAll("#tablaObjetoMoviles tr td:last-child");
            for(let i=0;i<filas.length;i++){
                filas[i].style.visibility="hidden";
            }
    }
    
}