const { Router } = require("express");
const UsersModel = require("../Models/UsersModel");

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
    const users = await UsersModel.find({});
    return res.json(users);
})

userRoutes.get("/:id", (req, res) => {
  const {id} = req.params;
  const user = await UsersModel.findOne({_id:id});
  return res.json(user);
})

userRoutes.post("/", (req, res) => {
    const user = await UsersModel({...req.body});
    user.save((err, user) => {
        if(err) return res.status(500).send(err);
        else return res.status(201).json(user);
    });
})


module.exports = userRoutes;