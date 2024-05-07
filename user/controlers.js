import { user } from '../models/userModel';

// const { where } = require('sequelize');
//..............................add user
const addUser = 
 async (req, res) => {
  try {
    const { name, email, password, age } = req.body;
    const user = await user.create({ name, email, password, age });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
//..............................update user

const updateUser = async (req, res) => {
    try {
     
      const { id } = req.params;
      
      const { name, email, password, age } = req.body;
    
      const updatedUser = await user.update({ name, email, password, age }, { where: { id } });
      
      res.status(200).json(updatedUser);
    } catch (error) {
      
      res.status(500).json({ error: error.message });
    }
  };


  const getAllusers = async (req,res)=>
  {
       try {
        const getAllUsers=await user.findAll();
        res.status(200).json(getAllUsers);
    
       }catch(error){
          res.status(500).json({error:error.message })
       }
  }
  const deleteUser = async (req,res)=>
  {
       try {
        const id=req.params;
        const deleteUser=await user.destroy({where : {id}});
        res.status(204).json(deleteUser);
    
       }catch(error){
          res.status(500).json({error:error.message })
       }
  }
  const getUsersStartingWithA = async (req, res) => {
    try {
      // Find all users whose name starts with 'a'
      const users = await User.findAll({ where: { name: { [Op.like]: 'a%' } } });
     
      res.status(200).json(users);
    } catch (error) {
 
      res.status(500).json({ error: error.message });
    }
  };
  
  const getUsersWithAge2030 = async (req, res) => {
    try {
      // Find all users whose name starts with 'a'
      const users = await User.findAll({ where: { age: { [Op.between]: [20, 30]} } });
     
      res.status(200).json(users);
    } catch (error) {
 
      res.status(500).json({ error: error.message });
    }
  };


module.exports = {
  addUser,
  updateUser,
  getAllusers,
  deleteUser,
  getUsersStartingWithA,
  getUsersWithAge2030,
};
