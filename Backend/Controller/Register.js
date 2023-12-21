const express = require('express');
const router = express.Router();
const Item = require('../Module/Schema/Login');

// Create
const postSignUp = async (req, res) => {
  try {
    const newItem = new Item(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (error) {
    console.log(error,"err");
    res.status(400).json({ error: error.message });
  }
}

// Read all
const getSignUp = async (req, res) => {
  try {
    const items = await Item.find();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

// Read one
const getSignUpid = async (req, res) => {
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
const updateSignUp = async (req, res) => {
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
const deleteSignUp = async (req, res) => {
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

module.exports = {postSignUp,getSignUp,getSignUpid,updateSignUp,deleteSignUp};
