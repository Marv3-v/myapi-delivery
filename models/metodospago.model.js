// sequelize es el objeto y conexion. Sequelize. Datatypes
module.exports = (sequelize, Sequelize) => {
    const MetodoPagos = sequelize.define("metodos_pago", {
        tipo: {
            type: Sequelize.STRING
        }
    });

    return MetodoPagos;
}