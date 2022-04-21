import Link from "../Link";
import "./styles.scss";

const Header = () => (
  <header className="header">
    <nav className="header__navigation">
      <Link to="/overview">Overview</Link>
      <Link to="/policy">Policy</Link>
      <Link to="/" isUnderlined>
        Reports
      </Link>
    </nav>
  </header>
);

export default Header;
