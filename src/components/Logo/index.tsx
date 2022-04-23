import { ReactComponent as LogoImage } from "../../assets/logo/logo.svg";
import Link from "../Link";

import "./styles.scss";

export interface LogoProps {
  brandName?: string;
  path?: string;
  activeLink: string;
  setActiveLink: (path: string) => void;
}

const Logo: React.FC<LogoProps> = ({
  brandName,
  path = "/",
  activeLink,
  setActiveLink,
}) => (
  <Link
    className="brand-logo"
    to={path}
    activeLink={activeLink}
    setActiveLink={setActiveLink}
  >
    <LogoImage />
    {brandName && <h1 className="brand-name">{brandName}</h1>}
  </Link>
);

export default Logo;
