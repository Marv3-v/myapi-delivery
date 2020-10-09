//ESTADOS
module.exports = (sequelize, Sequelize) => {
    const Estados = sequelize.define("estados", {
        estado: {
            type: Sequelize.BOOLEAN
        }
    });
    return Estados;
}