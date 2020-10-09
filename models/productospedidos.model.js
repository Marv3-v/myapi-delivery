//Model Productos Pedidos Table
module.exports = (sequelize, Sequelize) => {
    const Productospedido = sequelize.define("productos_pedido", {
        precio_unitario: {
            type: Sequelize.DECIMAL(9,2),
        },
        cantidad: {
            type: Sequelize.DECIMAL(9,2),
        },
        subtotal: {
            type: Sequelize.DECIMAL(9,2)
        }
    });

    return Productospedido;
};
