    
    
    
function validar_nombreUsuario(string){
           
    //var validar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{4,9}$/;
    var validar1 = /\w{4,9}/;
    var rta = validar1.test(string);
    
    return rta;
}

function validar_contrasena(string){
    
    //var validar = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/;
    var validar1 = /\w{6,}/;
    var rta = validar1.test(string);
    
    return rta;
}

module.exports.validar_nombreUsuario = validar_nombreUsuario;
module.exports.validar_contrasena = validar_contrasena;

let registros = [];

function agregarRegistro(){
    let form = document.form_registro_usuario;
    registros.push([form.in_usuario.value,form.in_contrasena.value]);
}

function filtrarPorContrasena(arreglo,filtro){
    arreglo_validador =[];
    for (var i=0; i < arreglo.length; i++){
        if (arreglo[i][0].length <= filtro) {
            arreglo_validador.push(arreglo[i]);
        }
    }
    console.log(arreglo_validador);
    return arreglo_validador;
}


module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.filtrarPorContrasena = filtrarPorContrasena;






