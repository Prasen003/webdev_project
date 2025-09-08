const express = require('express');
const Item = require('../models/Item');

const router = express.Router();

// Get all items
router.get('/', async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// Add new item
router.post('/', async (req, res) => {
  const { name, price, description } = req.body;
  const item = new Item({ name, price, description });
  await item.save();
  res.json(item);
});

module.exports = router;