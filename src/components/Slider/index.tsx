import { Metric } from "../../pages/ReportsPage/data";
import "./styles.scss";

export interface SliderProps extends Metric {
  activeBackgroundColor: string;
  currency: string;
}

const Slider: React.FC<SliderProps> = ({
  percentage,
  amount,
  activeBackgroundColor,
  currency = "$",
  name,
}) => (
  <div className="slider__container">
    <div className="slider__title-price">
      <p className="slider__title">{name}</p>
      <p className="slider__price">
        {amount} <span>{currency}</span>
      </p>
    </div>

    <div className="slider">
      <div
        className="slider__percentage"
        style={{
          width: `${percentage}%`,
          backgroundColor: activeBackgroundColor,
        }}
      />
    </div>
  </div>
);

export default Slider;
