import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Table from "./Atoms/Table";
import UserForm from "./Components/UserForm";

const App = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const addUser = (user) => {
    setUsers([...users, { ...user, id: Date.now() }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(
      users.map((user) => (user.id === updatedUser.id ? updatedUser : user))
    );
  };

  const deleteUser = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="container  mx-auto p-4">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Table
                users={users}
                deleteUser={deleteUser}
                setCurrentUser={setCurrentUser}
              />
            }
          />
          <Route path="/add" element={<UserForm addUser={addUser} />} />
          <Route
            path="/edit/:id"
            element={<UserForm users={users} updateUser={updateUser} />}
          />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
