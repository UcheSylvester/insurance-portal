import {
  NavLink as RouterLink,
  NavLinkProps as RouterLinkProps,
} from "react-router-dom";

import "./styles.scss";

export interface LinkProps extends RouterLinkProps {
  children: React.ReactNode;
  isUnderlined?: boolean;
  setActiveLink: (path: string) => void;
  activeLink: string;
}

const Link: React.FC<LinkProps> = ({
  isUnderlined,
  className = "",
  to,
  setActiveLink,
  activeLink,
  ...otherProps
}) => {
  const isActive = activeLink === to;

  return (
    <RouterLink
      to={to}
      className={
        isActive
          ? `link link--active ${isUnderlined ? "link--underlined" : ""}`
          : `link ${className}`
      }
      onClick={() => setActiveLink?.(to as string)}
      {...otherProps}
    />
  );
};

export default Link;
