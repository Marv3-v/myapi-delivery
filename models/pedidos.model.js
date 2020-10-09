//Model to Pedidos Table
module.exports = (sequelize, Sequelize) => {
    const Pedidos = sequelize.define("pedidos", {
        tarifa_envio: {
            type: Sequelize.DECIMAL(9,2),
        },
        total: {
            type: Sequelize.DECIMAL(9,2),
        },
    });

    return Pedidos;
};
