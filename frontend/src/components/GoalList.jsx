import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { GoalContext } from '../contexts/GoalContext';
import { GroupContext } from '../contexts/GroupContext';

const GoalList = () => {
  const { goals, setGoals } = useContext(GoalContext);
  const { currentGroup } = useContext(GroupContext);

  useEffect(() => {
    if (currentGroup) {
      axios.get(`http://localhost:5000/api/goals/${currentGroup._id}`)
        .then(res => setGoals(res.data));
    }
  }, [currentGroup, setGoals]);

  if (!currentGroup) return <div>Select a group to view goals.</div>;

  return (
    <div className="goal-list">
      <h2>Goals for {currentGroup.name}</h2>
      <ul>
        {goals.map(goal => (
          <li key={goal._id}>
            <strong>{goal.title}</strong> - {goal.progress}% - {goal.deadline ? new Date(goal.deadline).toLocaleDateString() : 'No deadline'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GoalList; 