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

    app.listen(PORT, () =>{
        console.log(`Servidor funcionando en http://localhost:${PORT}`);
    })