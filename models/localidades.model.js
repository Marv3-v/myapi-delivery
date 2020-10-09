//Localidades model
module.exports = (sequelize, Sequelize) => {
    const Localidades = sequelize.define("localidades", {
        nombre: {
            type: Sequelize.STRING,
        },
        calle: {
            type: Sequelize.STRING,
        },
        descripcion: {
            type: Sequelize.STRING,
        },
    });

    return Localidades;
}