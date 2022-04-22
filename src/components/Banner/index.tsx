import BannerImage from "../../assets/images/insurance-agency.png";
import Button from "../Button";

import "./styles.scss";

const Banner = () => (
  <section className="banner">
    <img src={BannerImage} alt="banner" />

    <div className="banner__details">
      <h2 className="banner__title">20% Safe On Your First Account</h2>
      <div className="banner__promo">
        <p className="banner__promo-code">NEWBIE20</p>

        <Button variant="ghost">Copy Code</Button>
      </div>
    </div>
  </section>
);

export default Banner;
