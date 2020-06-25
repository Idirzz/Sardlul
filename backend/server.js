const express = require("express");
const cors = require("cors");

require('dotenv').config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

const historyRoute = require("./routes/history")

app.use("/history", historyRoute);


app.listen(port, () => {
    console.log("Serveur ecoute sur le port " + port);
})