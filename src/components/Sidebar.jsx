import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Sidebar.module.css";
import {
  FaBars,
  FaTimes,
  FaUtensils,
  FaStore,
  FaStar,
  FaUser,
  FaCog,
  FaSignOutAlt,
  FaTachometerAlt
} from "react-icons/fa";

const Sidebar = ({ isExpanded, toggleSidebar }) => {
  const navigate = useNavigate();
  
  // Define the navigation items with their icons and paths
  const navigationItems = [
    { label: "Dashboard", path: "/dashboard", icon: <FaTachometerAlt /> },
    { label: "Foods", path: "/foods", icon: <FaStore /> },
    { label: "Restaurants", path: "/restaurant", icon: <FaUtensils /> },
    { label: "Reviews", path: "/review", icon: <FaStar /> },
    { label: "Users", path: "/users", icon: <FaUser /> }
  ];

  const bottomNavigationItems = [
    { label: "Settings", path: "/settings", icon: <FaCog /> },
    { label: "Logout", path: "/login", icon: <FaSignOutAlt /> }
  ];

  const handleNavigation = (path) => {
    navigate(path);
    if (window.innerWidth <= 991) {
      toggleSidebar(); 
    }
  };

  return (
    <>
      <button className={styles.collapseButton} onClick={toggleSidebar}>
        {isExpanded ? <FaTimes className={styles.toggleIcon} /> : <FaBars className={styles.toggleIcon} />}
      </button>
      <aside className={`${styles.sidebar} ${isExpanded ? styles.expanded : styles.collapsed}`}>
        <div className={styles.logo} onClick={() => handleNavigation("/dashboard")}>
          TASTE<span className={styles.logoHighlight}>BUDS</span>
        </div>
        <nav className={styles.navigation}>
          <div className={styles.navigationItems}>
            {navigationItems.map((item, index) => (
              <div key={index} className={styles.navigationItem} onClick={() => handleNavigation(item.path)}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
          <div className={styles.bottomNavigation}>
            {bottomNavigationItems.map((item, index) => (
              <div key={index} className={styles.navigationItem} onClick={() => handleNavigation(item.path)}>
                {item.icon}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
