const { Router } = require("express");
const {getUsers, getUserById, updateUserById, createNewUser} = require('../Controllers/UsersController');

const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUserById);

userRoutes.patch("/:id", updateUserById);

userRoutes.post("/", createNewUser);

module.exports = userRoutes;