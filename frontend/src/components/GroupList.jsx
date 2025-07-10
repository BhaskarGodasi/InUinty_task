import React, { useContext, useEffect } from 'react';
import axios from 'axios';
import { GroupContext } from '../contexts/GroupContext';
import { AuthContext } from '../contexts/AuthContext';

const GroupList = () => {
  const { groups, setGroups, currentGroup, setCurrentGroup } = useContext(GroupContext);
  const { user, token } = useContext(AuthContext);

  useEffect(() => {
    axios.get('http://localhost:5000/api/groups').then(res => setGroups(res.data));
  }, [setGroups]);

  const joinGroup = async (groupId) => {
    await axios.post('http://localhost:5000/api/groups/join', { userId: user.id, groupId }, { headers: { Authorization: `Bearer ${token}` } });
    setCurrentGroup(groups.find(g => g._id === groupId));
  };

  return (
    <div className="group-list">
      <h2>Groups</h2>
      <ul>
        {groups.map(group => (
          <li key={group._id}>
            {group.name} {group.members.some(m => m._id === user.id) ? '(Joined)' : <button onClick={() => joinGroup(group._id)}>Join</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GroupList; 