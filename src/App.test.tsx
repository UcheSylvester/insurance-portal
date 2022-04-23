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
  });
});
