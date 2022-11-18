var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var userBox = document.getElementById("usuario");
var password = document.getElementById("password");
var role = document.getElementById("role");
var registrarCampo = document.getElementById("registrar");

nombre.addEventListener("blur", () => comprobarNombre('nombre'));
apellido.addEventListener("blur", () => comprobarNombre('apellido'));
userBox.addEventListener("blur", () => comprobarUsuario('usuario'));
password.addEventListener("blur", () => ComprobarPass('password'));

role.addEventListener("change", () => comprobarRole('role'));

registrarCampo.addEventListener("click", registrar);
registrarCampo.addEventListener("click",cargarUsuarioNuevo);

function registrar() {
    if (nombreOk == true && usuarioOk == true && passwordOk == true && roleOk == true) {
        let pos = listaUsuarios.findIndex(user => user.usuario == userBox.value);
        if (pos == -1) {
            let objetoUsuario = [];
            objetoUsuario.push(new Usuario(nombre.value, apellido.value, userBox.value, password.value, role.value));
            localStorage.setItem("usuarioNuevo",JSON.stringify(objetoUsuario));
            alert("Usuario Registrado.");
        } else {
            alert("El usuario existe.");
        }
    } else {
        alert("Faltan campos.");
    }
}


let nombreOk = usuarioOk = passwordOk = roleOk = false;


function comprobarRole(LoQueComprobar) {
    var elemento = document.getElementById(LoQueComprobar);
    if (elemento.value == "") {
        if (!document.getElementById("span" + LoQueComprobar)) {
            var span = document.createElement("span");
            span.id = "span" + LoQueComprobar;
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + "  tiene que ser selecciondo";
            elemento.insertAdjacentElement("afterend", span);
        }

    } else {
        roleOk = true;
        if (document.getElementById("span" + LoQueComprobar)) {
            var span = document.getElementById("span" + LoQueComprobar);
            span.remove();

        }
    }
}

function comprobarNombre(LoQueComprobar) {
    var elemento = document.getElementById(LoQueComprobar);
    var patron = /^[a-zA-Z]+$/;
    if (elemento.value == "") {
        if (!document.getElementById("span" + LoQueComprobar)) {
            var span = document.createElement("span");
            span.id = "span" + LoQueComprobar;
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + "  no tiene que ser vacio";
            elemento.insertAdjacentElement("afterend", span);
        }
        elemento.style.borderColor = "red";
        elemento.focus();
    } else if (!patron.test(elemento.value)) {
        if (!document.getElementById("span" + LoQueComprobar)) {
            var span = document.createElement("span");
            span.id = "span" + LoQueComprobar;
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + " tiene que tener solo caracteres";
            elemento.insertAdjacentElement("afterend", span);
        } else {
            var span = document.getElementById("span" + LoQueComprobar);
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + " tiene que tener solo caracteres";
        }
        elemento.style.borderColor = "red";
        elemento.focus();
    } else {
        if (document.getElementById("span" + LoQueComprobar)) {
            var span = document.getElementById("span" + LoQueComprobar);
            span.remove();

        }
        elemento.style.borderColor = "white";
        nombreOk = true;
    }


}

function comprobarUsuario(LoQueComprobar) {
    var elemento = document.getElementById(LoQueComprobar);
    var patron = /^[a-zA-Z0-9_-]+$/;
    if (elemento.value == "") {
        if (!document.getElementById("span" + LoQueComprobar)) {
            var span = document.createElement("span");
            span.id = "span" + LoQueComprobar;
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + "  no tiene que ser vacio";
            elemento.insertAdjacentElement("afterend", span);
        }
        elemento.style.borderColor = "red";
        elemento.focus();
    } else if (!patron.test(elemento.value)) {
        if (!document.getElementById("span" + LoQueComprobar)) {
            var span = document.createElement("span");
            span.id = "span" + LoQueComprobar;
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + " no tiene caracteres admitidos";
            elemento.insertAdjacentElement("afterend", span);
        } else {
            var span = document.getElementById("span" + LoQueComprobar);
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + " no tiene caracteres admitidos";
        }
        elemento.style.borderColor = "red";
        elemento.focus();
    } else {
        if (document.getElementById("span" + LoQueComprobar)) {
            var span = document.getElementById("span" + LoQueComprobar);
            span.remove();

        }
        elemento.style.borderColor = "white";
        usuarioOk = true;
    }


}

function ComprobarPass(LoQueComprobar) {
    var elemento = document.getElementById(LoQueComprobar);
    var patron = /^[a-zA-Z0-9_-]{8}$/;
    if (elemento.value == "") {
        if (!document.getElementById("span" + LoQueComprobar)) {
            var span = document.createElement("span");
            span.id = "span" + LoQueComprobar;
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + "  no tiene que ser vacio";
            elemento.insertAdjacentElement("afterend", span);
        }
        elemento.style.borderColor = "red";
        elemento.focus();
    } else if (!patron.test(elemento.value)) {
        if (!document.getElementById("span" + LoQueComprobar)) {
            var span = document.createElement("span");
            span.id = "span" + LoQueComprobar;
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + " tiene que ser minimo de 8 caracteres";
            elemento.insertAdjacentElement("afterend", span);
        } else {
            var span = document.getElementById("span" + LoQueComprobar);
            span.style.color = "red";
            span.innerHTML = "El " + LoQueComprobar + " tiene que ser minimo de 8 caracteres";
        }
        elemento.style.borderColor = "red";
        elemento.focus();
    } else {
        if (document.getElementById("span" + LoQueComprobar)) {
            var span = document.getElementById("span" + LoQueComprobar);
            span.remove();
        }
        elemento.style.borderColor = "white";
        passwordOk = true;
    }


}




