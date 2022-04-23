import BannerImage from "../../assets/images/insurance-agency.png";
import Button from "../Button";

import { ReactComponent as PrimaryBannerPattern } from "../../assets/icons/primary-banner-pattern.svg";
import { ReactComponent as BannerPattern } from "../../assets/icons/banner-pattern.svg";

import useCopyToClipBoard from "../../hooks/useCopyToClipboard";
import { notify } from "../../helpers";

import "./styles.scss";

const PROMO_CODE: string = "NEWBIE20";

export interface BannerProps {
  promoCode?: string;
}

const Banner: React.FC<BannerProps> = ({ promoCode = PROMO_CODE }) => {
  const onCopySuccess = () => notify("Copied to clipboard");
  const { copyToClipboard } = useCopyToClipBoard(promoCode, onCopySuccess);

  return (
    <section className="banner">
      <img src={BannerImage} alt="banner" className="banner__image" />

      <div className="banner__details">
        <h2 className="banner__title">20% Safe On Your First Account</h2>
        <div className="banner__promo">
          <p className="banner__promo-code">{PROMO_CODE}</p>

          <Button variant="ghost" onClick={copyToClipboard}>
            Copy Code
          </Button>
        </div>
      </div>

      <PrimaryBannerPattern className="banner__pattern banner__pattern--primary" />
      <BannerPattern className="banner__pattern banner__pattern--secondary" />
    </section>
  );
};

export default Banner;
