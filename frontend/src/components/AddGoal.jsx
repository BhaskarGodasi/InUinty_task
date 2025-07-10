import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GoalContext } from '../contexts/GoalContext';
import { GroupContext } from '../contexts/GroupContext';
import { AuthContext } from '../contexts/AuthContext';

const AddGoal = () => {
  const { setGoals } = useContext(GoalContext);
  const { currentGroup } = useContext(GroupContext);
  const { user } = useContext(AuthContext);
  const [title, setTitle] = useState('');
  const [deadline, setDeadline] = useState('');

  const handleAdd = async (e) => {
    e.preventDefault();
    const res = await axios.post('http://localhost:5000/api/goals', {
      title,
      progress: 0,
      deadline,
      user: user.id,
      group: currentGroup._id
    });
    setGoals(goals => [...goals, res.data]);
    setTitle('');
    setDeadline('');
  };

  if (!currentGroup) return null;

  return (
    <form onSubmit={handleAdd} className="add-goal-form">
      <input value={title} onChange={e => setTitle(e.target.value)} placeholder="Goal Title" required />
      <input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} />
      <button type="submit">Add Goal</button>
    </form>
  );
};

export default AddGoal; 