const express = require("express");
const router = express.Router();
const placeController = require("../controller/place.controller");

//Creation des routes /users -> GET
router.get("/places", placeController.findAll);
router.post("/place", placeController.create);
router.get("/place/:id", placeController.findById);
router.get("/place/etage/:etage", placeController.findByEtage);
router.get("/place/user/:id", placeController.findByUserId);
router.put("/place/:id", placeController.update);
router.put("/place/assigner/:id", placeController.assigner);
router.put("/place/deassigner/:id", placeController.deAssigner);
router.delete("/place/:id", placeController.delete);

module.exports = router;