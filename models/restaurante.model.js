//Model to Restaurantes Table
module.exports = (sequelize, Sequelize) => {
  const Restaurantes = sequelize.define("restaurantes", {
    nombre: {
      type: Sequelize.STRING,
    },
    imagen_path: {
      type: Sequelize.STRING,
    },
  });

  return Restaurantes;
};
