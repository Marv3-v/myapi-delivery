// Rutas para las solicitudes HTTP
module.exports = app => {
    const restaurantes = require("../controllers/restaurante.controller.js");

    //
    var router = require("express").Router();

    // Obtener los restaurantes
    router.get("/", restaurantes.findAll);
    //Solo uno
    router.get("/:id/menu", restaurantes.findOne);
    // 
    app.use('/api/restaurantes', router);

    //
}