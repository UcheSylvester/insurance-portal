import Avatar from "../Avatar";
import Logo from "../Logo";
import Button from "../Button";
import Link from "../Link";

import LadyImage from "../../assets/images/lady.png";
import { ReactComponent as LogoutIcon } from "../../assets/icons/logout.svg";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";
import { ReactComponent as CloseIcon } from "../../assets/icons/close-icon.svg";
import { ILink } from "../../routes/links";

import "./styles.scss";

export interface SiderbarProps {
  links: ILink[];
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SiderbarProps> = ({
  links,
  isSidebarOpen,
  toggleSidebar,
}) => (
  <>
    <nav className={`sidebar ${isSidebarOpen ? "sidebar--open" : ""}`}>
      <Button variant="ghost" className="sidebar__menu" onClick={toggleSidebar}>
        {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
      </Button>

      <Logo brandName="Insurance Portal" />

      <Avatar src={LadyImage} alt=" Rusalba Ruiz" />

      <div className="sidebar__user-details">
        <h2 className="sidebar__user-name">Hello ! Rusalba Ruiz</h2>
        <p className="sidebar__user-welcome-note">
          Welcome Back To Your Insurance Portal
        </p>
        <p className="sidebar__user-plan">
          Your Plan : <span>Free</span>
        </p>
      </div>

      <Button className="sidebar__create-plan">
        Create New Plan <span>+</span>
      </Button>

      <ul className="sidebar__links">
        {links.map(({ label, path, icon: Icon }) => (
          <li className="sidebar__link" key={path}>
            <Link to={path}>
              <Icon /> <span>{label}</span>
            </Link>
          </li>
        ))}
      </ul>

      <Button className="sidebar__logout" variant="ghost">
        <LogoutIcon /> <span>Log out</span>
      </Button>
    </nav>

    {/* <div
        className={`sidebar__overlay${isSidebarOpen ? "--open" : ""}`}
        onClick={toggleSidebar}
      /> */}
  </>
);

export default Sidebar;
