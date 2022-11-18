let listaUsuarios = [];

function cargarListaUsuarios() {
    listaUsuarios.push(new Usuario("Ali", "Haider", "ali123", "1234", "admin"));
    listaUsuarios.push(new Usuario("John", "williams", "john123", "1234", "cliente"));
    listaUsuarios.push(new Usuario("Sergio", "s", "sergio123", "1234", "cliente"));
    listaUsuarios.push(new Usuario("Juan", "j", "juan123", "1234", "cliente"));
    listaUsuarios.push(new Usuario("David", "d", "david123", "1234", "cliente"));
}

function cargarUsuarioNuevo(){
    if(localStorage.getItem("usuarioNuevo")!=null){
        var usuarioNuevos=JSON.parse(localStorage.getItem("usuarioNuevo"));
        usuarioNuevos.forEach(usuario=>listaUsuarios.push(usuario));
    }
}

window.onload = () => {
    cargarListaUsuarios();
    cargarUsuarioNuevo();
}

