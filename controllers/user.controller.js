const User = require("../models/user.model");
const {v4: uuidv4} = require("uuid");

const getAllUsers = async (req, res) => {
    try{
        const users = await User.find()
        res.status(201).json(users)
    }catch(error){
        res.status(500).send(error.message)
    }
};

const getOneUser = async (req, res) => {
    try {
        const users = await User.findOne({id : req.params.id})
        res.status(201).json(users);    
    }catch(error){
        res.status(404).send(error.message)
    }
};

const createUser = async (req, res) => {
    try{
        const newUser = new User ({
            id : uuidv4(),
            name: req.body.name,
            age: Number(req.body.age)
        });
        await newUser.save()
        res.status(200).json(newUser);
    } catch(error) {
        res.status(500).send(error.message)
    }
};

const updateUser = async (req, res) => {
   try{
    const users = await User.findOne({id: req.params.id});
    users.name = req.body.name;
    users.age = Number(req.body.age);
    await users.save();
    res.status(201).json(users);
   }catch(error){
    res.status(401).send(error.message)
   }
};

const deleteUser = async (req, res) => {
    try{
        const users = await User.deleteOne({id : req.params.id});
        res.status(200).json({
        message: "user is deleted"
    });
    }catch(error){
        res.status(500).send(error.message);
    }
};




module.exports = {getAllUsers, getOneUser, createUser, updateUser, deleteUser};