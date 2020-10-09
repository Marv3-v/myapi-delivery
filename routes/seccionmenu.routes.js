// Rutas para las solicitudes HTTP
module.exports = app => {
    const seccionmenus = require("../controllers/seccionmenu.controller.js");

    //
    var router = require("express").Router();
    //Solo una categoria
    router.get("/:idrestaurante/menu/:id/", seccionmenus.findOne);
    // 
    app.use('/api/restaurantes', router);

    //
}