import BannerImage from "../../assets/images/insurance-agency.png";
import Button from "../Button";

import { ReactComponent as PrimaryBannerPattern } from "../../assets/icons/primary-banner-pattern.svg";
import { ReactComponent as BannerPattern } from "../../assets/icons/banner-pattern.svg";

import "./styles.scss";

const Banner = () => (
  <section className="banner">
    <img src={BannerImage} alt="banner" className="banner__image" />

    <div className="banner__details">
      <h2 className="banner__title">20% Safe On Your First Account</h2>
      <div className="banner__promo">
        <p className="banner__promo-code">NEWBIE20</p>

        <Button variant="ghost">Copy Code</Button>
      </div>
    </div>

    <PrimaryBannerPattern className="banner__pattern banner__pattern--primary" />
    <BannerPattern className="banner__pattern banner__pattern--secondary" />
  </section>
);

export default Banner;
