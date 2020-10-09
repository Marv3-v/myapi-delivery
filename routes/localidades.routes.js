// Rutas para las solicitudes HTTP
module.exports = app => {
    const localidades = require("../controllers/localidades.controller");

    //
    var router = require("express").Router();
    //Solo uno
    router.get("/:idCliente", localidades.findOne);
    // 
    app.use('/api/localidades', router);

    //
}