import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Layout, { LayoutProps } from ".";

const renderLayout = (props?: Partial<LayoutProps>) => {
  const defaultProps: LayoutProps = {
    children: <div>test</div>,
  };

  return render(
    <MemoryRouter>
      <Layout {...defaultProps} {...props} />
    </MemoryRouter>
  );
};

describe("<Layout />", () => {
  it("should render the children", () => {
    renderLayout();

    expect(screen.getByText("test")).toBeInTheDocument();
  });

  it("toggles sidebar", () => {
    renderLayout();

    const [menuIcon] = screen.getAllByRole("button", {
      name: "toggle sidebar",
    });

    // when menu is clicked
    userEvent.click(menuIcon);

    // then sidebar should be open
    const navigation = screen.getByRole("navigation", {
      name: /side navigation/gi,
    });
    expect(navigation).toHaveClass("sidebar--open");

    // and overlay should be open
    const overlay = screen.getByRole("dialog");
    expect(overlay).toHaveClass("sidebar__overlay--open");

    // when menu is clicked again
    userEvent.click(overlay);

    // then sidebar and overlay should be closed
    expect(navigation).not.toHaveClass("sidebar--open");
    expect(overlay).not.toHaveClass("sidebar__overlay--open");
  });
});
