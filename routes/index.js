// import express
const express = require("express");

// init express router
const router = express.Router();

// import verifyToken
const verifyToken = require("../middleware/auth");

// import register controller
const registerController = require("../controllers/RegisterController");

// import login controller
const loginController = require("../controllers/LoginController");

// import user controller
const userController = require("../controllers/UserController");

// import validate register and login
const { validateRegister, validateLogin } = require("../utils/validators/auth");

// import validate user
const { validateUser } = require("../utils/validators/user");

// define route for register
router.post("/register", validateRegister, registerController.register);

// define route for login
router.post("/login", validateLogin, loginController.login);

// define route get users
router.get("/admin/users", verifyToken, userController.findUsers);

// define route create user
router.post("/admin/users", verifyToken, validateUser, userController.createUser);

// define route get user by ID
router.get("/admin/users/:id", verifyToken, userController.findUserById);

// define route update user
route.put("/admin/users/:id", verifyToken, validateUser, userController.updateUser);

// define route delete user
route.delete("/admin/users/:id", verifyToken, userController.deleteUser);

// export router
module.exports = router;
