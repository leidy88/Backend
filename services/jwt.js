var jwt = require('jwt-simple');
var moment = require('moment')
var clave="Clave-Secreta";

exports.createToken=function(user){
    var payload={
        sub:user._id,
        Nombre:user.Nombre,
        Precio:user.Precio,
        Direccion: user.Direccion,
        CorreoElectronico: user.CorreoElectronico,
        Contraseña: user.Contraseña,
        iat:moment().unix(),
        exp:moment().add(30, 'days').unix



    };
    return jwt.encode(payload, clave);

}