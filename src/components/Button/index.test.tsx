import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Button, { ButtonProps } from ".";

const renderButton = (props?: Partial<ButtonProps>) => {
  const defaultProps: ButtonProps = {};

  return render(<Button {...defaultProps} {...props} />);
};

describe("<Button />", () => {
  it("should render the text", () => {
    renderButton({ children: "Click me" });

    expect(screen.getByText("Click me")).toBeInTheDocument();
  });

  it("should call onClick handler", () => {
    const onClick = jest.fn();

    renderButton({ onClick });

    const button = screen.getByRole("button");
    userEvent.click(button);

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('should show button as "Primary" by default', () => {
    renderButton();

    expect(screen.getByRole("button")).toHaveClass("button-primary");
  });

  it('should show button as "Secondary"', () => {
    renderButton({ variant: "secondary" });

    expect(screen.getByRole("button")).toHaveClass("button-secondary");
  });

  it("should pass the additional className when provided", () => {
    renderButton({ className: "custom-class" });

    expect(screen.getByRole("button")).toHaveClass("custom-class");
  });
});
