
var btnLogin = document.getElementById("btn-entrar");
var btnRegistrar = document.getElementById("registrar");
var divLogin = document.getElementById("login");

function volverAlEstado(){
    if(document.getElementById("btn-entrar")){
        document.getElementById("btn-entrar").addEventListener("click",() =>{
            location.href="login.html"
        })   
    }
}

volverAlEstado();


var botonesLogin = divLogin.innerHTML;
var carritoBox = document.getElementsByClassName("carrito")[0].innerHTML;

function comprobarEstadoUsuario(){
    if(sessionStorage.getItem("Usuario")!=null){
        var storageUsuario = JSON.parse(sessionStorage.getItem("Usuario"));
        divLogin.innerHTML="Usuario: "+storageUsuario.nombre;
        var btn = document.createElement("button");
        btn.addEventListener("click",() =>{
            divLogin.innerHTML = botonesLogin;
            document.getElementsByClassName("carrito")[0].innerHTML = carritoBox;
            volverAlEstado();
            sessionStorage.removeItem("Usuario");
        })
        btn.innerHTML="Sign Out";
        divLogin.appendChild(btn);
        if(storageUsuario.role=="admin"){
            document.getElementsByClassName("carrito")[0].innerHTML="";
        }
    }
    
}