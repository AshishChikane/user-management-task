import React from "react";
import { Link } from "react-router-dom";

const Table = ({ users, deleteUser, setCurrentUser }) => (
  <div>
    <div className="flex bg-white justify-between ">
      <h2 className="text-2xl font-bold">Active Users</h2>

      <Link
        to="/add"
        className="mt-2 inline-block bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add New User
      </Link>
    </div>
    {users.length === 0 ? (
      <p className="text-center text-gray-500 mt-4">
        No users added yet. Please add a new user.
      </p>
    ) : (
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="border px-4 py-2">Sr. No.</th>
            <th className="border px-4 py-2">Name</th>
            <th className="border px-4 py-2">Number</th>
            <th className="border px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">{user.name}</td>
              <td className="border px-4 py-2">{user.phone}</td>
              <td className="border px-4 justify-around py-2 flex space-x-2">
                <Link
                  to={`/edit/${user.id}`}
                  className="text-blue-500"
                  onClick={() => setCurrentUser(user)}
                >
                  Edit
                </Link>
                <button
                  onClick={() => deleteUser(user.id)}
                  className="text-red-500"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    )}
  </div>
);

export default Table;
