var mongoose= require('mongoose');

var Schema=mongoose.Schema;

var productoSchema= new Schema({

    Nombre:Schema.Types.String,
    Precio:Schema.Types.Number,
    Valores:Schema.Types.String,
    Descripcion:Schema.Types.String,
    idCategoria:Schema.Types.ObjectId,
   


}, {collection:"Productos" });
module.exports=mongoose.model("Productos", productoSchema);