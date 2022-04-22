import Slider from "../Slider";
import "./styles.scss";

const ReportCard = () => (
  <article className="report-card">
    <div className="report-card__title-container">
      <p className="report-card__value">
        1000 <span>$</span>
      </p>

      <h3 className="report-card__title">Total Value of Disbursement</h3>
    </div>

    <Slider
      percentage={40}
      price={400}
      title="Policy"
      activeBackgroundColor="red"
    />

    <Slider
      percentage={40}
      price={400}
      title="Policy"
      activeBackgroundColor="red"
    />
  </article>
);

export default ReportCard;
