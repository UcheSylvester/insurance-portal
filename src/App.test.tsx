import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import App, { AppProps } from "./App";

const renderApp = (props?: Partial<AppProps>) => {
  const defaultProps: AppProps = {};

  render(
    <MemoryRouter>
      <App {...defaultProps} {...props} />
      );
    </MemoryRouter>
  );
};

describe("<App />", () => {
  it("renders correctly", () => {
    renderApp();

    // there should be the report cards on the page
    const reportCards = screen.getAllByTestId("ReportCard");
    expect(reportCards).toHaveLength(3);

    // sidebar should be on the page
    const sideNavigation = screen.getByRole("navigation", {
      name: "side navigation",
    });
    expect(sideNavigation).toBeInTheDocument();

    const headerNavigation = screen.getByRole("navigation", {
      name: "side navigation",
    });
    expect(headerNavigation).toBeInTheDocument();
  });
});
