import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2>Assignment Tracker</h2>
      <ul>
        <li>
          <Link to="/">Home</Link> {/* Navigates to Homej.js */}
        </li>
        <li>
          <Link to="/home">Home Page</Link> {/* Navigates to Home.js */}
        </li>
        <li>
          <Link to="/upload">Upload</Link> {/* Navigates to Upload.js */}
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
