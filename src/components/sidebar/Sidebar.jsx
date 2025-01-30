import React, { useContext } from "react";
import { AuthContext } from "../../context/authContext"; 
import { useNavigate } from "react-router-dom"; 
import "./sidebar.css";

const Sidebar = ({ setActiveSection, setActiveTab }) => {
  const { logout } = useContext(AuthContext); 
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };  

  return (
    <div className="sidebar px-2">
      <h2 className="text-center text-white py-3">Admin Panel</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <button className="nav-link" onClick={() => setActiveSection("menu")}>
            Menu
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setActiveSection("gallery")}>
            Gallery
          </button>
        </li>
        {/* <li className="nav-item">
          <button className="nav-link" onClick={() => setActiveSection("cakes")}>
            Cakes
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setActiveSection("newArrivals")}>
            New Arrivals
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setActiveSection("pastries")}>
            Pastries
          </button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={() => setActiveSection("todaysSpecial")}>
            Today's Special
          </button>
        </li> */}
      </ul>
      <div className="logout-btn-container mt-5">
        <button className="btn btn-danger w-75" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
