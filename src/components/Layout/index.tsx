import { basicLinks, sideLinks } from "../../routes/links";
import Header from "../Header";
import Sidebar from "../Sidebar";

import "./styles.scss";

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="layout">
      <Sidebar links={sideLinks} />

      <div className="layout__content">
        <Header links={basicLinks} />
        {children}
      </div>
    </div>
  );
};

export default Layout;
