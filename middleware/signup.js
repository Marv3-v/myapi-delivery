const db = require("../models/index");
const Cliente = db.clientes;

checkDuplicateUsernameOrEmail = (req, res, next) => {
  // Username
  Cliente.findOne({
    where: {
      usuario: req.body.usuario,
    },
  }).then((cliente) => {
    if (cliente) {
      res.status(400).send({
        message: "Failed! Username is already in use!",
      });
      return;
    } else {
        next();
    }
  });
};

const verifySignUp = {
  checkDuplicateUsernameOrEmail: checkDuplicateUsernameOrEmail,
};

module.exports = verifySignUp;
