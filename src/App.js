import React, { useState } from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {

  const [users, setUsers] = useState([]);

  const addUserHandler = (userName, userAge) => {
    setUsers(prevUsers => [...prevUsers, { name: userName, age: userAge, id: Math.random().toString() }])
  }

  return (
    <div className="App">
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={users} />
    </div>
  );
}

export default App;
