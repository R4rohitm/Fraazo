const { Router } = require("express");
const {getUsers, getUserById, createNewUser} = require('../Controllers/UsersController');

const userRoutes = Router();

userRoutes.get("/", getUsers);

userRoutes.get("/:id", getUserById);

userRoutes.post("/", createNewUser);

module.exports = userRoutes;