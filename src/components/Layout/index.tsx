import { useState } from "react";
import { basicLinks, sideLinks } from "../../routes/links";
import Header from "../Header";
import Sidebar from "../Sidebar";

import "./styles.scss";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="layout">
      <Sidebar
        links={sideLinks}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
      />

      <div className="layout__content">
        <Header toggleSidebar={toggleSidebar} links={basicLinks} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
