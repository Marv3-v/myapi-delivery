const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
    operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.restaurantes = require("./restaurante.model.js")(sequelize, Sequelize);
db.seccionmenus = require("./seccionmenus.model.js")(sequelize, Sequelize);
db.productos = require("./productos.model")(sequelize, Sequelize);
db.clientes = require("./clientes.model")(sequelize, Sequelize);
db.localidades = require("./localidades.model")(sequelize, Sequelize);
db.pedidos = require("./pedidos.model")(sequelize, Sequelize);
db.productosPedidos = require("./productospedidos.model")(sequelize, Sequelize);
db.estados = require("./estados.model")(sequelize, Sequelize);
db.metodoPago = require("./metodospago.model")(sequelize, Sequelize);
// Relaciones
// Un restaurante tiene varias secciones/platillos
db.restaurantes.hasMany(db.seccionmenus, { as: "seccionmenus"});
db.seccionmenus.belongsTo(db.restaurantes, {
    foreignKey: "restauranteId",
    as: "restaurantes"
});

//Un cliente tiene varias direcciones
db.clientes.hasMany(db.localidades, { as: "localidades"});
db.localidades.belongsTo(db.clientes, {
    foreignKey: "clienteId",
    as: "clientes"
}) 

// Un cliente tiene pedidos
db.clientes.hasMany(db.pedidos, { as: "pedidos"});
db.pedidos.belongsTo(db.clientes, {
    foreign: "clienteId",
    as: "clientes"
})

// Un menu tiene varias productos
db.seccionmenus.hasMany(db.productos, { as: "productos"});
db.productos.belongsTo(db.seccionmenus, {
    foreignKey: "seccionmenuId",
    as: "seccionmenus"  
});


// Un pedido tiene muchos detalles (Subtablas)
db.pedidos.hasMany(db.productosPedidos, { as: "productos_pedidos"});
db.productosPedidos.belongsTo(db.pedidos, {
    foreignKey: "pedidoId",
    as: "pedidos"

});
// Un producto tiene muchos detalles
db.productos.hasMany(db.productosPedidos, { as: "productos_pedidos"});
db.productosPedidos.belongsTo(db.productos, {
    foreignKey: "productoId",
    as: "productos"
})

// Un pedido pertenece a un metodo de pago
db.metodoPago.hasMany(db.pedidos, { as: "pedidos"});
db.pedidos.belongsTo(db.metodoPago, {
    foreignKey: "metodo_pagoId",
    as: "metodos_pago"
})

// Un pedido pertenece a un estado
db.estados.hasMany(db.pedidos, { as: "pedidos"});
db.pedidos.belongsTo(db.estados, {
    foreignKey: "estadoId",
    as: "estados"
})
// Productos detalle tiene estados
db.estados.hasMany(db.productosPedidos, { as: "productos_pedidos"});
db.productosPedidos.belongsTo(db.estados, {
    foreignKey: "estadoId",
    as:"estados"
})

module.exports = db;
