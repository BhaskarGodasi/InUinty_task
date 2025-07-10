import React, { createContext, useState } from 'react';

export const GoalContext = createContext();

export const GoalProvider = ({ children }) => {
  const [goals, setGoals] = useState([]);

  return (
    <GoalContext.Provider value={{ goals, setGoals }}>
      {children}
    </GoalContext.Provider>
  );
}; 