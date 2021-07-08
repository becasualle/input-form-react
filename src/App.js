import Form from "./Form";
import Users from "./Users.js";
import { useState } from "react";


function App() {
  const [users, setUsers] = useState([
    { name: "Mark", age: 30, id: 1 },
    { name: "Sveta", age: 28, id: 2 },
    { name: "Alex", age: 31, id: 3 }
  ]);

  const handleUsers = (user) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(user);
      return updatedUsers;
    });
  }

  return (
    <div className="App">
      <Form handleUsers={handleUsers} />
      <Users users={users} />
    </div>
  );
}

export default App;
