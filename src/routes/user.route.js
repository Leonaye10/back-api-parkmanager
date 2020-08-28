const express = require("express");
const router = express.Router();
const userController = require("../controller/user.controller");
const { authRole } = require("../middleware/auth");

//Creation des routes /users -> GET
router.get("/users", userController.findAll);
router.post("/user", userController.register);
router.get("/user/:id", userController.findById);
router.post("/user/login", userController.login);
router.put("/user/:id", userController.update);
router.delete("/user/:id", userController.delete);
router.patch("/user/:id", userController.update);

module.exports = router;