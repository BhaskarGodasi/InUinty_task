import React, { useContext } from 'react';
import { AuthProvider, AuthContext } from './contexts/AuthContext';
import { GroupProvider } from './contexts/GroupContext';
import { GoalProvider } from './contexts/GoalContext';
import Login from './components/Login';
import GroupList from './components/GroupList';
import GoalList from './components/GoalList';
import AddGoal from './components/AddGoal';
import './index.css';

const MainApp = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className="container">
      {!user ? (
        <Login />
      ) : (
        <>
          <GroupList />
          <GoalList />
          <AddGoal />
        </>
      )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <GroupProvider>
        <GoalProvider>
          <MainApp />
        </GoalProvider>
      </GroupProvider>
    </AuthProvider>
  );
}

export default App;
