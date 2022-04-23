import { Report, SLIDER_COLOR } from "../../pages/ReportsPage/data";
import Slider from "../Slider";
import "./styles.scss";

export interface ReportCardProps extends Report {}

const ReportCard: React.FC<ReportCardProps> = ({
  value,
  currency,
  name,
  metrics,
}) => (
  <article className="report-card" data-testid="ReportCard">
    <div className="report-card__title-container">
      <p className="report-card__value">
        {value} <span>{currency}</span>
      </p>

      <h3 className="report-card__title">{name}</h3>
    </div>

    {metrics.map((metric) => (
      <Slider
        {...metric}
        key={metric.id}
        activeBackgroundColor={SLIDER_COLOR[metric.name]}
        currency={currency}
      />
    ))}
  </article>
);

export default ReportCard;
