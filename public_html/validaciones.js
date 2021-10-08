    
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
