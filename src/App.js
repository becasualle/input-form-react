import { useState } from "react";
import Form from "./Form";
import Users from "./Users.js";
import Popup from "./Popup";


function App() {
  const [users, setUsers] = useState([
    { name: "Mark", age: 30, id: 1 },
    { name: "Sveta", age: 28, id: 2 },
    { name: "Alex", age: 31, id: 3 }
  ]);

  const [showPopup, setshowPopup] = useState([false, false]);

  const handleUsers = (user) => {
    setUsers(prevUsers => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift(user);
      return updatedUsers;
    });
  }

  const handlePopup = (negativeNumber, emptyInputs) => {
    setshowPopup([negativeNumber, emptyInputs]);
  }

  return (
    <div className="App">
      <Form handleUsers={handleUsers} handlePopup={handlePopup} />
      <Users users={users} />
      <Popup showPopup={showPopup} handlePopup={handlePopup} />
    </div>
  );
}

export default App;
