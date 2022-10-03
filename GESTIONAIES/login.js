var listaUsuarios=[];

function cargarUsuarios(){
	listaUsuarios=[];
	listaUsuarios.push(["ali","123456"]);
	listaUsuarios.push(["fer","123456"]);
	listaUsuarios.push(["juan","123456"]);
	listaUsuarios.push(["pepe","123456"]);
}



function comprobarUsuario(){
	
	cargarUsuarios();

	usuariovalido=false;

	var usuario=document.getElementById('usuario').value;
	var clave=document.getElementById('clave').value;

	listaUsuarios.forEach(user => {

			if(user[0]==usuario && user[1]==clave){
				usuariovalido=true;
			}	
		
	});

	if(usuariovalido==true){
		location.href="aterrizaje.html";
	}else{
		alert("El usuario y contraseña es invalido");
	}

	
}
