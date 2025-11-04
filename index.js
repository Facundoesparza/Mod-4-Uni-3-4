const express = require("express");
const app = express();
const PORT = 4000;

    app.get("/", (req, res)=>{
        res.send("Bienvenidooo");
    });

    app.get("/contacto", (req, res)=>{
        res.send("Contactoo");
    });

    app.get("/productos", (req, res)=>{
        res.send("Productoos");
    });

// unidad 4
    
app.get("/:nombre", (req, res)=>{
    const nombreUsuario = req.params.nombre;
    if(nombreUsuario === "facundo"){
        res.send("Hola facundo");
    }else if(nombreUsuario === "lolo"){
        res.send("Hola lolo");
    } else {
    res.send(`No tengo datos para el usuario: ${nombreUsuario}`);
  }
})

    app.listen(PORT, () =>{
        console.log(`Servidor funcionando en http://localhost:${PORT}`);
    })