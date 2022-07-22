const UsersModel = require("../Models/UsersModel");

const getUsers = async(req,res) => {
     const users = await UsersModel.find({});
     return res.json(users);
}

const getUserById = async(req,res) => {
     const { id } = req.params;
     const user = await UsersModel.findOne({ _id: id });
     return res.json(user);
}

const createNewUser = async(req,res) => {
    const user = await UsersModel({ ...req.body });
    user.save((err, user) => {
      if (err) return res.status(500).send(err);
      else return res.status(201).json(user);
    });
}

module.exports = {getUsers, getUserById, createNewUser};