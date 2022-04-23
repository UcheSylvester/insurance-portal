import { render, screen } from "@testing-library/react";

import ReportsPage, { ReportsPageProps } from ".";

const renderReportsPage = (props?: Partial<ReportsPageProps>) => {
  const defaultProps: ReportsPageProps = {};

  render(<ReportsPage {...defaultProps} {...props} />);
};

describe("<ReportsPage />", () => {
  it("renders correctly", () => {
    renderReportsPage();

    const reportCards = screen.getAllByTestId("ReportCard");

    expect(reportCards).toHaveLength(3);
  });
});
