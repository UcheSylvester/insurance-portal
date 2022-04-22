import { ILink } from "../../routes/links";
import Link from "../Link";
import "./styles.scss";

export interface HeaderProps {
  links: ILink[];
}
const Header: React.FC<HeaderProps> = ({ links }) => (
  <header className="header">
    <nav className="header__navigation">
      {links.map(({ label, path }) => (
        <Link to={path} key={path} isUnderlined>
          {label}
        </Link>
      ))}
    </nav>
  </header>
);

export default Header;
