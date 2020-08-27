const express = require("express");
const app = express();
const mysql = require("mysql");
const bodyParser = require("body-parser");
const port = 4000;

//Definir les routes
const userRoute = require("./routes/user.route");
const parkingRoute = require("./routes/parking.route");

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(userRoute);
app.use(parkingRoute);


app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);    
})