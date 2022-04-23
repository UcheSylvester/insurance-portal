import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import Link, { LinkProps } from ".";

const renderLink = (props?: Partial<LinkProps>) => {
  const defaultProps: LinkProps = {
    children: "home",
    to: "/",
    activeLink: "/",
    setActiveLink: jest.fn(),
  };

  render(
    <MemoryRouter>
      <Link {...defaultProps} {...props} />
    </MemoryRouter>
  );
};

describe("<Link />", () => {
  it("should render children", () => {
    renderLink();

    const link = screen.getByRole("link", { name: "home" });
    expect(link).toBeInTheDocument();
  });

  it("should render to", () => {
    renderLink();

    const link = screen.getByRole("link", { name: "home" });
    expect(link).toHaveAttribute("href", "/");
  });

  it("should render underlined class", () => {
    renderLink({ isUnderlined: true });

    const link = screen.getByRole("link", { name: "home" });
    expect(link).toHaveClass("link--underlined");
  });
});
