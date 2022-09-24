var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var UsuariosSchema= new Schema({
    Documento:Schema.Types.Number,
    Nombres: Schema.Types.String,
    Direccion: Schema.Types.String,
    CorreoElectronico: Schema.Types.String,
    Contraseña: Schema.Types.String


   

}, {collection:"Usuarios" });
module.exports=mongoose.model("Usuario", UsuariosSchema);