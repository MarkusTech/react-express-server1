const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");

// calling from userController
router.post("/register", userController.register);
router.post("/login", userController.login);
router.get("/", userController.fetch);
router.get("/:id", userController.getUser);
router.post("/:id", userController.update);
router.delete("/:id", userController.delete);
// another way of exporting
module.exports = router;
