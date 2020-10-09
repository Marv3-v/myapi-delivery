// const db = require("../models");
const db = require('../models/index');
const Localidades = db.localidades;

//Obtener solo una localidad
exports.findOne = (req, res) => {
    const cliente = req.params.idCliente;
    Localidades.findOne({ where: { clienteId: cliente }, include: ["clientes"] }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message + " Error al obtener la Localidad " + id
        })
    })
}