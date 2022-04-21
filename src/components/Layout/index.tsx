import Header from "../Header";
import Sidebar from "../Sidebar";

import "./styles.scss";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar />

      <div>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
