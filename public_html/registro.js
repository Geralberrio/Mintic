
let registros = [];

function agregarRegistro(){
    function registro(usuario,contrasena){
        this.usuario = usuario;
        this.contrasena = contrasena;
    }
    
    var capturarUsuario = document.getElementById("in_usuario").value;
    var capturarContrasena = document.getElementById("in_contrasena").value;
    var nuevoRegistro = new registro(capturarUsuario,capturarContrasena);
    registros.push(nuevoRegistro);
    console.log(registros);
}

function filtrarPorContrasena(arreglo,filtro){
    var arreglo_validador = [];
    for (var i=0; i < arreglo.length; i++){
        if (arreglo[i]['contrasena'].length <= filtro) {
            arreglo_validador.push(arreglo[i]);
        }
    }
    console.log(arreglo_validador);
    return arreglo_validador;
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.filtrarPorContrasena = filtrarPorContrasena;

