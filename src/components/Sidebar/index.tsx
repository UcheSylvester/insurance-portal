import Avatar from "../Avatar";
import Logo from "../Logo";

import LadyImage from "../../assets/images/lady.png";

import "./styles.scss";
import Button from "../Button";

const Sidebar = () => (
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
  </nav>
);

export default Sidebar;
