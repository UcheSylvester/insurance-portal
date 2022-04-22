import "./styles.scss";

export interface SliderProps {
  percentage: number;
  price: number;
  activeBackgroundColor: string;
  currenecy?: string;
  title: string;
}

const Slider: React.FC<SliderProps> = ({
  percentage,
  price,
  activeBackgroundColor,
  currenecy = "$",
  title,
}) => (
  <div className="slider__container">
    <div className="slider__title-price">
      <p className="slider__title">{title}</p>
      <p className="slider__price">
        {price} <span>{currenecy}</span>
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
