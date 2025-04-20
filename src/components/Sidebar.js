import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaTachometerAlt, FaUpload, FaStickyNote, FaArrowLeft } from 'react-icons/fa';
import './Sidebar.css';
import QuickStart from './Quickstart'; // Import your QuickStart component

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* <img src="/gmu-logo.png" alt="GMU Logo" className="logo-img" /> */}
        <h3>SWE -632<br></br>User Interface Design</h3>
      </div>

      {/* Quick Start button (below GMU logo) */}
      <QuickStart />

      <ul>
        <li>
          <Link to="/"><FaHome /> Home</Link>
        </li>
        <li>
          <Link to="/home"><FaTachometerAlt /> Dashboard</Link>
        </li>
        <li>
          <Link to="/upload"><FaUpload /> Upload</Link>
        </li>
        <li>
          {/* <a href="/notes" target="_blank" rel="noopener noreferrer"><FaStickyNote /> Notes</a> */}
          <Link to="/notes" className="sidebar-link"><FaStickyNote />Notes</Link>
        </li>
      </ul>

      <div className="collapse-icon">
        {/* <FaArrowLeft /> */}
      </div>
    </div>
  );
}

export default Sidebar;
