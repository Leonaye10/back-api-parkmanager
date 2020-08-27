const express = require("express");
const router = express.Router();
const parkingController = require("../controller/parking.controller");

//Creation des routes /users -> GET
router.get("/parkings", parkingController.findAll);
router.post("/parking", parkingController.create);
router.get("/parking/:id", parkingController.findById);
router.put("/parking/:id", parkingController.update);
router.delete("/parking/:id", parkingController.delete);

module.exports = router;