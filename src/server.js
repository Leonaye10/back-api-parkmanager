const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { authAllUser, authRole } = require("./middleware/auth");
const port = 4000;

//Definir les routes
const userRoute = require("./routes/user.route");
const placeRoute = require("./routes/place.route");


app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(authAllUser);
app.use(userRoute);
//app.use(authRole);
app.use(placeRoute);


app.listen(port, () => {
    console.log(`Serveur lancé sur le port ${port}`);    
})