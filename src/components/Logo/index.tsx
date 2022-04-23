import { ReactComponent as LogoImage } from "../../assets/logo/logo.svg";
import Link from "../Link";

import "./styles.scss";

export interface LogoProps {
  brandName?: string;
  path?: string;
}

const Logo: React.FC<LogoProps> = ({ brandName, path = "/" }) => (
  <Link className="brand-logo" to={path}>
    <LogoImage />
    {brandName && <h1 className="brand-name">{brandName}</h1>}
  </Link>
);

export default Logo;
