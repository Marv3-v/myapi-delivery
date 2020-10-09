//Model to Clientes
module.exports = (sequelize, Sequelize) => {
    const Clientes = sequelize.define("clientes",{
        nombre: {
            type: Sequelize.STRING,
        },
        usuario: {
            type: Sequelize.STRING,
        },
        contrasenia: {
            type: Sequelize.STRING,
        },
        nit: {
            type: Sequelize.STRING,
        },
        telefono: {
            type: Sequelize.STRING,
        },
    });

    return Clientes;
}