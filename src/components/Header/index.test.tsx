import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Header, { HeaderProps } from ".";
import { basicLinks } from "../../routes/links";

const renderHeader = (props?: Partial<HeaderProps>) => {
  const defaultProps: HeaderProps = {
    links: basicLinks,
    toggleSidebar: jest.fn(),
    activeLink: "/",
    setActiveLink: jest.fn(),
  };

  return render(
    <MemoryRouter>
      <Header {...defaultProps} {...props} />
    </MemoryRouter>
  );
};

describe("<Header />", () => {
  it("should render links", () => {
    renderHeader();

    basicLinks.forEach(({ label, path }) => {
      const link = screen.getByRole("link", { name: label });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", path);
    });
  });

  it("menu icon should toggle sidebar", () => {
    const toggleSidebar = jest.fn();

    renderHeader({ toggleSidebar });

    const menuIcon = screen.getByRole("button", { name: "toggle sidebar" });
    userEvent.click(menuIcon);

    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });
});
