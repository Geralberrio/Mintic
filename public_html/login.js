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

function validar_captcha(rcaptcha){
    let validar = false;
    if (rcaptcha === 5){
        validar = true;
    }
    return validar;
}

function iniciar_sesion(usuario = document.getElementById("login_usuario").value, 
                        contrasena = document.getElementById("login_contrasena").value,
                        rcaptcha=document.getElementById("login_captcha").value){
   var prueba = false;
   for (var i=0; i < registros.length; i++){
        if (registros[i]['usuario']=== usuario & 
            registros[i]['contrasena']===contrasena & 
            validar_captcha(rcaptcha)) {
            prueba = true;
        }
    }
    return prueba;
  
}

module.exports.registros = registros;
module.exports.agregarRegistro = agregarRegistro;
module.exports.iniciar_sesion = iniciar_sesion;
module.exports.validar_captcha = validar_captcha;