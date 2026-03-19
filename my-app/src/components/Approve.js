import React from "react";
import '../App.css';

function Approve({ userli }) {
  const appUsers = userli.filter((u) => u.status === "approved");
  return (
    <div>
      <h2>Approved Users</h2>
      <ul>
        {appUsers.map((i) => (
          <li key={i.id}>
            <span>Name: {i.name}</span> | <span>Email: {i.email}</span> | <span>Department: {i.department}</span> | <span>Status: {i.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Approve;