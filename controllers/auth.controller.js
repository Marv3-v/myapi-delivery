const db = require("../models/index")
const config = require("../auth.config")

const Clientes = db.clientes;
const Localidades = db.localidades;

const Op = db.Sequelize.Op;

var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const { clientes } = require("../models/index");

exports.signup = (req, res) => {
    Clientes.create({
        nombre: req.body.nombre,
        usuario: req.body.usuario,
        nit: req.body.nit,
        telefono: req.body.telefono,
        contrasenia: bcrypt.hashSync(req.body.password, 8)
    }).then(user => {
      // user role = 1
      Localidades.create({
        nombre: req.body.localidad,
        calle: req.body.calle,
        descripcion: req.body.descripcion,
        clienteId: user.id
      }).then(() => {
        res.send({ message: "Usuario registrado correctamente!" });
      });

    }).catch(err => {
            res.status(500).send({
                message: 
                err.message || "Hubo un error"
            })
        });
}

exports.signin = (req, res) => {
  Clientes.findOne({
    where: {
      usuario: req.body.usuario,
    },
  }).then((cliente) => {
      if (!cliente) {
        return res.status(404).send("Usuario no encontrado.");
      }

      var passwordIsValid = bcrypt.compareSync(
        req.body.password,
        cliente.contrasenia
      );

      if (!passwordIsValid) {
        return res.status(401).send(
          // {
          // accessToken: null,
          // message: 
          "Contraseña invalida!"
        // }
        );
      }

      var token = jwt.sign({ id: cliente.id }, config.secret, {
        expiresIn: 86400, // 24 hours
      });

    res.status(200).send({
      id: cliente.id,
      usuario: cliente.usuario,
      accessToken: token,
    });
    
    })
    .catch((err) => {
      res.status(500).send({ message: err.message });
    });
};