const express = require("express");
const cors = require("cors");

const consumoRoutes = require("./routes/consumoRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Gestão de Kitnets funcionando.");
});

const consController = require("./controllers/consController");
app.get("/contratos", consController.listarContrato);
app.get("/inquilinos", consController.listarInquilino);
app.get("/kitnet", consController.listarKitnet);
app.get("/conteudo", consController.listarConten);

app.use("/consumos", consumoRoutes);

module.exports = app;
