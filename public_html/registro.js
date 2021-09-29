
let registros = [];

function agregarRegistro(){
    let form = document.form_registro_usuario;
    registros.push([form.in_usuario.value,form.in_contrasena.value]);
}

function filtrarPorContrasena(arreglo,filtro){
    var arreglo_validador = [];
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

