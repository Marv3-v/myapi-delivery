const { seccionmenus, restaurantes } = require('../models/index');
// const db = require("../models");
const db = require('../models/index');
const Seccionmenus = db.seccionmenus;
const Op = db.Sequelize.Op;
//Obtener solo un menu/categoria


//
exports.findOne = (req, res) => {
    const id = req.params.id;
    const idrestaurante = req.params.idrestaurante;
    Seccionmenus.findOne({ where: { restauranteId: idrestaurante, id: id }, include: ["productos"] }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message + " Error al obtener los productos " + id
        })
    })
}

//