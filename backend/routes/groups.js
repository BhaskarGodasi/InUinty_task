const express = require('express');
const Group = require('../models/Group');
const User = require('../models/User');
const router = express.Router();

// Get all groups
router.get('/', async (req, res) => {
  const groups = await Group.find().populate('members', 'username');
  res.json(groups);
});

// Create a new group
router.post('/', async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ message: 'Name is required' });
  const group = await Group.create({ name, members: [] });
  res.json(group);
});

// Join a group
router.post('/join', async (req, res) => {
  const { userId, groupId } = req.body;
  const group = await Group.findById(groupId);
  if (!group) return res.status(404).json({ message: 'Group not found' });
  if (!group.members.includes(userId)) group.members.push(userId);
  await group.save();
  await User.findByIdAndUpdate(userId, { $addToSet: { groups: groupId } });
  res.json(group);
});

module.exports = router;
