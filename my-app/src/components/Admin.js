import React from "react";
import '../App.css';

function Admin({ userli, setUserli }) {
  const hAppr = (id) => {
    const updt = userli.map((u) =>u.id === id && u.status === "pending" ? { ...u, status: "approved" } : u);
    setUserli(updt);
  };

  const hRej = (id) => {
    const updt = userli.map((u) =>u.id === id && u.status === "pending" ? { ...u, status: "rejected" } : u);
    setUserli(updt);
  };

  return (
    <div>
      <h2>All Users</h2>
      <ul>
        {userli.map((i) => (<li key={i.id}>
            <span>Name: {i.name}</span> | <span>Email: {i.email}</span> | <span>Department: {i.department}</span> | <span>Status: {i.status}</span>
            {i.status === "pending" && (
              <>
                <button onClick={() => hAppr(i.id)}>Approve</button>
                <button onClick={() => hRej(i.id)}>Reject</button>
              </>
            )}  </li>))}
      </ul>
    </div>
  );
}

export default Admin;