import React, { useState, useContext } from 'react';
import axios from 'axios';
import { GroupContext } from '../contexts/GroupContext';

const CreateGroup = () => {
  const { setGroups } = useContext(GroupContext);
  const [name, setName] = useState('');
  const [error, setError] = useState('');

  const handleCreate = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/groups', { name });
      setGroups(groups => [...groups, res.data]);
      setName('');
      setError('');
    } catch (err) {
      setError('Could not create group');
    }
  };

  return (
    <form onSubmit={handleCreate} className="create-group-form">
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Group Name" required />
      <button type="submit">Create Group</button>
      {error && <p style={{color:'red'}}>{error}</p>}
    </form>
  );
};

export default CreateGroup; 