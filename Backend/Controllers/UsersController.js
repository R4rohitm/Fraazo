const UsersModel = require("../Models/UsersModel");

function generateString(length) {
  const characters =
       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let result = " ";
  
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  return `${result}-${random(100, 1000000000)}`;
}

const getUsers = async(req,res) => {
     const users = await UsersModel.find({});
     return res.json(users);
}

const getUserById = async(req,res) => {
     const { id } = req.params;
     const user = await UsersModel.findOne({ _id: id });
     return res.json(user);
}

const updateUserById = async(req,res) => {
     const { id } = req.params;
     const {title, firstname, lastname, email} = req.body;
     const user = await UsersModel.updateOne({ _id: id }, {$set: {title: title, firstname: firstname, lastname: lastname, email: email}});
     if(user.modifiedCount === 1 && user.matchedCount === 1){
      return res.status(200).send("User Details Updated");
     }else return res.status(404).send("User Not Found");
}

const createNewUser = async(req,res) => {
    const {mobile, email, name} = req.body;
    const userExists = await UsersModel.findOne({mobile: mobile, email: email, name: name}); 
    if(userExists){
     return res.status(400).json({error: "User already exists"});
    }else {
     const user = await UsersModel({ ...req.body, coupon: generateString(2) });
     user.save((err, user) => {
       if (err) return res.status(500).send(err);
       else return res.status(201).json(user);
     });
    }
}

module.exports = {getUsers, getUserById, updateUserById, createNewUser};