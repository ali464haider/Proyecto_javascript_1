class Usuario{
    constructor(nombre,apellido,usuario,contraseña,role){
        this.nombre=nombre;
        this.apellido=apellido;
        this.usuario=usuario;
        this.contraseña=contraseña;
        this.role=role
    }

    cambiarRole(nuevoRole){
        return this.role=nuevoRole;
    }
    cambiarContraseña(nuevaPass){
        return this.contraseña=nuevaPass;
    }
    cambiarUsuario(nuevoUser){
        return this.usuario=nuevoUser;
    }
}