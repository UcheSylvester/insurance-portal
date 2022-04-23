import { ILink } from "../../routes/links";
import Button from "../Button";
import Link from "../Link";
import "./styles.scss";

import { ReactComponent as MenuIcon } from "../../assets/icons/menu-icon.svg";

export interface HeaderProps {
  links: ILink[];
  toggleSidebar: () => void;
  activeLink: string;
  setActiveLink: (path: string) => void;
}

const Header: React.FC<HeaderProps> = ({
  links,
  toggleSidebar,
  activeLink,
  setActiveLink,
}) => (
  <header className="header">
    <Button
      variant="ghost"
      className="header__menu"
      aria-label="toggle sidebar"
      onClick={toggleSidebar}
    >
      <MenuIcon />
    </Button>
    <nav className="header__navigation" aria-label="header navigation">
      {links.map(({ label, path }) => (
        <Link
          to={path}
          key={path}
          isUnderlined
          activeLink={activeLink}
          setActiveLink={setActiveLink}
        >
          {label}
        </Link>
      ))}
    </nav>
  </header>
);

export default Header;
