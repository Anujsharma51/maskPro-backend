const express = require("express");
const router = express.Router();

// app.use(logger)
const userController = require("../controllers/usersController");

router.post("/user/login", userController.login);

// router.post("/user/logout", userController.logout);
router.get("/user/get", userController.getUsers);

module.exports = router;
