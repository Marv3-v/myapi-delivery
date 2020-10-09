//Express y Body parser imports
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

var corsOptions = {
    origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// Convierte las solicitudes a: application/json
app.use(bodyParser.json());
//
const db = require("./models");
// Convierte las solicitudes a content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta de prueba
app.get("/", (req, res) => {
    res.json({ message: "Bienvenido a Ruedas." });
});

//

// Agregar las rutas
db.sequelize.sync();
// Dev
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

require("./routes/restaurante.routes")(app); 
require("./routes/seccionmenu.routes")(app); 
require("./routes/auth.routes")(app); 
require("./routes/cliente.routes")(app); 
require("./routes/pedidos.routes")(app); 
require("./routes/localidades.routes")(app); 
// Puerto
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('Server is running on port ${PORT}.');
});
