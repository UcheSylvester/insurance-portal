import Avatar from "../Avatar";
import Logo from "../Logo";
import Button from "../Button";

import LadyImage from "../../assets/images/lady.png";

import "./styles.scss";
import { ILink } from "../../routes/links";
import Link from "../Link";

export interface SiderbarProps {
  links: ILink[];
}

const Sidebar: React.FC<SiderbarProps> = ({ links }) => (
  <nav className="sidebar">
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

    <Button>
      Create New Plan <span>+</span>
    </Button>

    <ul className="sidebar__links">
      {links.map(({ label, path, icon: Icon }) => (
        <li className="sidebar__link" key={path}>
          <Link to={path}>
            <Icon /> {label}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

export default Sidebar;
