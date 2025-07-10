const express = require('express');
const Goal = require('../models/Goal');
const router = express.Router();

// Get all goals for a group
router.get('/:groupId', async (req, res) => {
  const goals = await Goal.find({ group: req.params.groupId });
  res.json(goals);
});

// Add a goal
router.post('/', async (req, res) => {
  const { title, progress, deadline, user, group } = req.body;
  const goal = await Goal.create({ title, progress, deadline, user, group });
  res.json(goal);
});

module.exports = router;
