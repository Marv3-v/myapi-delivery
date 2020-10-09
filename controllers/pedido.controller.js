// const db = require("../models");
const db = require('../models/index');
const Pedidos = db.pedidos;
const ProductosPedidos = db.productosPedidos;
const Op = db.sequelize.Op;

exports.create = (req, res) => {
    if(!req.body.total) {
        res.status(400).send({
            message: "No puedes guardar nada"
        })
        return;
    }

    // Save Tutorial in the database
    Pedidos.create({
        total: req.body.total,
        tarifa_envio: req.body.tarifa,
        clienteId: req.body.clienteId,
        estadoId: req.body.estadoId,
        metodo_pagoId: req.body.metodoId,
    }).then(pedido => {
            req.body.detalles.forEach(element => {
                    ProductosPedidos.create({
                    pedidoId: pedido.id,
                    productoId: element.productoId,
                    cantidad: element.cantidad,
                    precio_unitario: element.precio,
                    subtotal: element.subtotal,
                    estadoId: element.estadoId,
                })
            })
            res.send(pedido)
        }).catch(err => {
            res.status(500).send({
                message:
                    err.message || "No se pudo crear."
            });
        });
}

exports.findAll = (req, res) => {
    Pedidos.findAll().then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message:
                err.message || "Hubo un error al obtener los pedidos"
        })
    });
}

//Obtener solo un restaurante
exports.findOne = (req, res) => {
    const id = req.params.id;

    Pedidos.findByPk(id, { include: ["productos_pedido"] }).then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message + " Error al obtener los detalles " + id
        })
    })
}