import { ReactComponent as LogoImage } from "../../assets/logo/logo.svg";

import "./styles.scss";

export interface LogoProps {
  brandName?: string;
}

const Logo: React.FC<LogoProps> = ({ brandName }) => (
  <div className="brand-logo">
    <LogoImage />
    {brandName && <h1 className="brand-name">{brandName}</h1>}
  </div>
);

export default Logo;
