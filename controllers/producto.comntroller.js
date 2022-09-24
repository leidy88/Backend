'use strict'
var Productos=require('../models/producto.model')


var productocontroller={
   
    getProducto:(req, res)=>{
        Productos.find((err, Productos)=>{
            if(err) return res.status(500).send({message: "Error en el servidor" + err});
            if(!Productos) return res.status(404).send({message:"No se encontraron registros"})
            if(Productos) return res.status(200).send({Productos:Productos})
        });

    },
    insertProducto:(req, res)=>{
        var prod=new Productos();
        var params= req.body;
        prod.Nombre=params.Nombre;
        prod.Precio=params.Precio;
        prod.Descripcion=params.Descripcion;        
        prod.idCat=params.idCategoria;
        console.log(params);
        prod.save((err, prodSaved)=>{
            if(err) return res.status(500).send({message:"Error en el servidor"+err});
            if(!prodSaved) return res.status(404).send("El producto no ha sido guardado");
            if(prodSaved) return res.status(200).send({producto:prodSaved});

        });
    },
    getAll(req,res){
        Productos.find((err,productos)=>{
            if(err)return res.status(500).send("Error en el servidor");
            if(!productos)return res.status(404).send("No se encontraron productos");
            if(productos) return res.status(200).send({productos:productos});
    
        });
    }

    


    
    


}




module.exports= productocontroller;