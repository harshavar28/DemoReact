import React from "react";
import '../App.css';

function Reject({ userli }) {
  const rejUsers = userli.filter((u) => u.status === "rejected");
  return (
    <div>
      <h2>Rejected Users</h2>
      <ul>
        {rejUsers.map((i) => (
          <li key={i.id}>
            <span>Name: {i.name}</span> | <span>Email: {i.email}</span> | <span>Department: {i.department}</span> | <span>Status: {i.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reject;