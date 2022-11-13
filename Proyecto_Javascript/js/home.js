listaCategorias = [
    ["IPHONE","iphone.html","images/iphone.jpg"],
    ["SAMSUNG","samsung.html","images/samsung.jfif"],
    ["HUAWEI","huawei.html","images/huawei.jfif"],
    ["XIAOMI","xiaomi.html","images/xiaomi.jfif"]
];

window.onload = () => {
    var categoria = document.getElementsByClassName("categorias")[0];
    cargarCategorias(listaCategorias);
    comprobarEstadoUsuario();
}

function cargarCategorias(lista) {
    var categoria = document.getElementsByClassName("categorias")[0];
    categoria.innerHTML="";
    lista.forEach(elemento => {
            var a = document.createElement('a');
            a.setAttribute("href",elemento[1]);
            a.classList.add("categoria-item");

            var div=document.createElement('div');
            div.classList.add("overlay");
            a.appendChild(div);

            var p=document.createElement('p');
            p.classList.add("title");
            p.innerHTML=elemento[0];
            a.appendChild(p);

            var img=document.createElement('img')
            img.setAttribute("src",elemento[2]);
            a.appendChild(img);

            categoria.appendChild(a);
        })
}

function filtrar() {
    var contenido = event.target.value;
    var listaFiltrada = listaCategorias.filter(elemento => elemento[0].toLowerCase().includes(contenido.toLowerCase()));
    cargarCategorias(listaFiltrada)
}

document.getElementById("searchForm").addEventListener("keyup", filtrar);


