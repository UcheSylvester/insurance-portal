import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MemoryRouter } from "react-router-dom";

import Sidebar, { SidebarProps } from ".";
import { basicLinks } from "../../routes/links";

const renderSidebar = (props?: Partial<SidebarProps>) => {
  const defaultProps: SidebarProps = {
    links: basicLinks,
    isSidebarOpen: false,
    toggleSidebar: jest.fn(),
    activeLink: "/",
    setActiveLink: jest.fn(),
  };

  return render(
    <MemoryRouter>
      <Sidebar {...defaultProps} {...props} />
    </MemoryRouter>
  );
};

describe("<Sidebar />", () => {
  it("should render links", () => {
    renderSidebar();

    basicLinks.forEach(({ label, path }) => {
      const link = screen.getByRole("link", {
        name: `link icon ${label}`,
        exact: false,
      });
      expect(link).toBeInTheDocument();
      expect(link).toHaveAttribute("href", path);
    });
  });

  it("menu icon should toggle sidebar", () => {
    const toggleSidebar = jest.fn();

    renderSidebar({ toggleSidebar });

    const menuIcon = screen.getByRole("button", {
      name: "toggle sidebar",
    });
    userEvent.click(menuIcon);

    expect(toggleSidebar).toHaveBeenCalledTimes(1);
  });

  it("should show sidebar when isSidebarOpen is true", () => {
    renderSidebar({ isSidebarOpen: true });

    const navigation = screen.getByRole("navigation", {
      name: /side navigation/gi,
    });
    expect(navigation).toHaveClass("sidebar--open");

    const overlay = screen.getByRole("dialog");
    expect(overlay).toHaveClass("sidebar__overlay--open");
  });
});
