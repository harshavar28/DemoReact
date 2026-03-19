import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Admin from "./components/Admin";
import Pending from "./components/Pending";
import Approve from "./components/Approve";
import Reject from "./components/Reject";
import { users } from "./dummy";
import './App.css';

function App() {
  const [userli, setUserli] = useState(users);

  return (
    <Router>
      <div>
        <h1>Admin Panel</h1>
        <nav style={{ display: "flex", gap: "20px", padding: "10px", borderBottom: "1px solid black" }}>
          <Link to="/">Dashboard</Link> 
          <Link to="/pending">Pending</Link>
          <Link to="/approved">Approved</Link> 
          <Link to="/rejected">Rejected</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Admin userli={userli} setUserli={setUserli} />} />
          <Route path="/pending" element={<Pending userli={userli} />} />
          <Route path="/approved" element={<Approve userli={userli} />} />
          <Route path="/rejected" element={<Reject userli={userli} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;