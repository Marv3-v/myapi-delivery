// Rutas para las solicitudes HTTP
module.exports = app => {
    const pedidos = require("../controllers/pedido.controller");

    //
    var router = require("express").Router();

    // Crear
    router.post("/", pedidos.create);
    // Obtener los restaurantes
    router.get("/", pedidos.findAll);
    //Solo uno
    router.get("/:id", pedidos.findOne);
    // 
    app.use('/api/pedidos', router);

    //
}