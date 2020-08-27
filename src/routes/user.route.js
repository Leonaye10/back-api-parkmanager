const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");

//Creation des routes /users -> GET
router.get("/users", userController.findAll);
router.post("/user", userController.create);
router.get("/user/:id", userController.findById);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.delete);
router.patch("/user/:id", userController.update);

module.exports = router;