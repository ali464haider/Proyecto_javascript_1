




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
