import "./styles.scss";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "tertiary" | "ghost";
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  variant = "primary",
  ...otherProps
}) => (
  <button
    className={`button button-${variant} ${className}`}
    onClick={onClick}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;
