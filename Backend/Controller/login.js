const express = require('express');
const router = express.Router();
const Item = require('../Module/Schema/Login');





const postSignin = (req, res) => {
    const { email, password } = req.body;
  
    Item.findOne({ email, password })
      .then((user) => {
        if (user) {
          // Signin the user
          res.json({
            success: true,
            message: 'Signin successful',
          });
        } else {
          // User not found
          res.json({
            success: false,
            message: 'User not found',
          });
        }
      })
      .catch((error) => {
        // Error
        res.json({
          success: false,
          message: error.message,
        });
      });
  };
  










// Create
// const postSignin = async (req, res) => {
//   try {
//     const newItem = new Item(req.body);
//     await newItem.save();
//     res.status(201).json(newItem);
//   } catch (error) {
//     console.log(error,"err");
//     res.status(400).json({ error: error.message });
//   }
// }

// Read all
const getSignin = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Read one
const getSigninid = async (req, res) => {
  try {
    const item = await Item.findById(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Update
const updateSignin = async (req, res) => {
  try {
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

// Delete
const deleteSignin = async (req, res) => {
  try {
    const item = await Item.findByIdAndRemove(req.params.id);
    if (!item) {
      return res.status(404).json({ message: 'Item not found' });
    }
    res.json({ message: 'Item deleted' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = {postSignin,getSignin,getSigninid,updateSignin,deleteSignin};
