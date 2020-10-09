//Model Productos Table
module.exports = (sequelize, Sequelize) => {
    const Productos = sequelize.define("productos", {
        nombre: {
            type: Sequelize.STRING,
        },
        precio: {
            type: Sequelize.DECIMAL(9,2)
        },
        imagen_path: {
            type: Sequelize.STRING,
        },
    });

    return Productos;
};
