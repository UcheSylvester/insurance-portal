import {
  NavLink as RouterLink,
  NavLinkProps as RouterLinkProps,
} from "react-router-dom";

import "./styles.scss";

export interface LinkProps extends RouterLinkProps {
  children: React.ReactNode;
  isUnderlined?: boolean;
}

const Link: React.FC<LinkProps> = ({ isUnderlined, ...otherProps }) => (
  <RouterLink
    className={(isActive) =>
      !isActive
        ? "link"
        : `link link--active ${isUnderlined ? "link--underlined" : ""}`
    }
    {...otherProps}
  />
);

export default Link;
