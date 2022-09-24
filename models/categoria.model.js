var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var categoriaSchema= new Schema({

    Nombre:Schema.Types.String,
    Descripcion:Schema.Types.Date,
    Imagen: Schema.Types,


}, {collection:"Categoria" });
module.exports=mongoose.model("Categoria", categoriaSchema);