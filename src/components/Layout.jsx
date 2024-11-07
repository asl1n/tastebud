import React, { useState } from "react";
import Sidebar from "./Sidebar"; // Adjust the path if necessary

const Layout = ({ children }) => {
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarExpanded(!isSidebarExpanded);
  };

  return (
    <div className={`${isSidebarExpanded ? '' : 'collapsed'}`}>
      <Sidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
      <main className={`${isSidebarExpanded ? 'ml-[16%]' : 'ml-0'} transition-all duration-300`}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
