

let listaUsuarios = [];

function cargarListaUsuarios() {
    listaUsuarios.push(new Usuario("Ali", "Haider", "ali123", "1234", "admin"));
    listaUsuarios.push(new Usuario("John", "williams", "john123", "1234", "cliente"));
    listaUsuarios.push(new Usuario("Sergio", "s", "sergio123", "1234", "cliente"));
    listaUsuarios.push(new Usuario("Juan", "j", "juan123", "1234", "cliente"));
    listaUsuarios.push(new Usuario("David", "d", "david123", "1234", "cliente"));
}

window.onload = () => {
    cargarListaUsuarios();
}


var login = document.getElementById("login");

login.addEventListener("click", comprobarUsuario);

function comprobarUsuario() {
    var usuario = document.getElementById("nombreUsuario");
    var password = document.getElementById("password");

    let pos = listaUsuarios.findIndex(user => user.usuario == usuario.value && user.contraseña == password.value);

    if (pos != -1) {
        sessionStorage.setItem("Usuario", JSON.stringify(listaUsuarios[pos]));
        location.href = "Home.html"
    } else {
        if (!document.getElementById("parrafoIncorrecto")) {
            var p = document.createElement("p");
            p.id = "parrafoIncorrecto"
            p.innerHTML = "Usuario incorrecto";
            login.append(p);

        }

        document.getElementsByClassName("userBox")[0].style.border = "2px solid red"
        usuario.focus();

    }
}
