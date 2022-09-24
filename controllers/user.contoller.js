'use strict'
var Usuario = require('../models/user.model.js')
var bcrypt = require('bcrypt-nodejs')
var jwt = require('../Services/jwt.js')

//Funcion registro de usuario
function prueba(req, res) {
    res.status(200).send({ message: "BIENVENIDO" });
}


function register(req, res) {


    var params = req.body;
    var user = new Usuario();

    user.CorreoElectronico = params.CorreoElectronico;
    user.Role = "Admin";

    if (params.Contraseña) {
        bcrypt.hash(params.Contraseña, null, null, (err, hash) => {

            user.Contraseña = hash;

            user.save((err, user) => {
                if (err) return res.status(500).send({ message: "Error en el servidor" + err });
                if (!user) return res.status(404).send({ message: "No se puede gaurdar usuario" + err })
                if (user) return res.status(200).send({ user: user })




            });
        });
    }

}

function login(req, res) {

    var params = req.body;

    var CorreoElectronico = params.CorreoElectronico;

    var Contraseña = params.Contraseña;

    Usuario.findOne({ CorreoElectronico: CorreoElectronico }, (err, user) => {
        if (err) return res.status(500).send({ message: "Error en el servidor" + err });
        if (!user) return res.status(404).send({ message: "No existe el usuario" })
        if (user) {
            bcrypt.compare(Contraseña, user.Contraseña, function (err, check) {
                if (check) {


                    if (params.gethash) {
                        return res.status(200).send({ token: jwt.createToken(user) })
                    } else {
                        return res.status(200).send({ user: user });
                    }

                }
            });
        }

    });
}

function updateUser(req, res) {
    let id = req.params.id;
    let params = req.body;

    if (req.user.sub != id) {
        return res.status(404).send({ message: "No esta autorizado para entrar" })
    }
    User.findByIdAndUpdate(id, params, (err, userupdate) => {
        if (err) return res.status(500).send({ message: "Error en el servidor" + err });
        if (!userupdate) return res.status(404).send({ message: "No se puede gaurdar usuario" + err })
        if (userupdate) return res.status(200).send({ userupdate: userupdate })

    });







}
module.exports = { register, login, prueba, updateUser };