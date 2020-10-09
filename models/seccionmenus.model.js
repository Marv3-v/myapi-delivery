//Model seccionmenu Table
module.exports = (sequelize, Sequelize) => {
    const Seccionmenus = sequelize.define("seccionmenus", {
        nombre: {
            type: Sequelize.STRING,
        },
        imagen_path: {
            type: Sequelize.STRING,
        },
    });

    return Seccionmenus;
};
