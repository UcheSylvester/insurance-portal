import { render, screen } from "@testing-library/react";

import ReportCard, { ReportCardProps } from ".";
import { REPORT_DATA } from "../../pages/ReportsPage/data";

const MOCK_REPORT = REPORT_DATA[0];

const renderReportCard = (props?: Partial<ReportCardProps>) => {
  const defaultProps: ReportCardProps = MOCK_REPORT;

  render(<ReportCard {...defaultProps} {...props} />);
};

describe("<ReportCard />", () => {
  it("renders correctly", () => {
    renderReportCard();

    expect(screen.getByText(MOCK_REPORT.name)).toBeInTheDocument();
    expect(screen.getByText(MOCK_REPORT.value)).toBeInTheDocument();
  });
});
