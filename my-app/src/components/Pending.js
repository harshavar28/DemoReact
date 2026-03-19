import React from "react";
import '../App.css';

function Pending({ userli }) {
  const penUsers = userli.filter((u) => u.status === "pending");
  return (
    <div>
      <h2>Pending Users</h2>
      <ul>
        {penUsers.map((i) => (
          <li key={i.id}>
            <span>Name: {i.name}</span> | <span>Email: {i.email}</span> | <span>Department: {i.department}</span> | <span>Status: {i.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pending;