
var apellido=document.getElementById("apellido");
var usuario=document.getElementById("usuario");
var password=document.getElementById("password");
var confirmarPassword=document.getElementById("confirmarPassword");
var role=document.getElementById("role");

nombre.addEventListener("blur",comprobarNombre);

function comprobarNombre(){
    var nombre=document.getElementById("nombre");
    var patron =/^[a-zA-Z]$/;
    if(!patron.test(nombre.value)){
        nombre.style.borderColor="red";
        nombre.focus();
    }else{
        nombre.style.borderColor="white";
    }
}