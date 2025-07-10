import React, { createContext, useState } from 'react';

export const GroupContext = createContext();

export const GroupProvider = ({ children }) => {
  const [groups, setGroups] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(null);

  return (
    <GroupContext.Provider value={{ groups, setGroups, currentGroup, setCurrentGroup }}>
      {children}
    </GroupContext.Provider>
  );
}; 