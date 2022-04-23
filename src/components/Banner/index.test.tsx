import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Banner, { BannerProps } from ".";

const MOCK_PROMO_CODE = "NEWBIE20";

const renderBanner = (props?: Partial<BannerProps>) => {
  const defaultProps: BannerProps = {
    promoCode: MOCK_PROMO_CODE,
  };

  return render(<Banner {...defaultProps} {...props} />);
};

describe("<Banner />", () => {
  it("should show promo code", () => {
    renderBanner();

    expect(screen.getByText(MOCK_PROMO_CODE)).toBeInTheDocument();
  });

  it("copies promo code to clipboard", () => {
    renderBanner();

    // mock navigator.clipboard copy
    Object.assign(window.navigator, {
      clipboard: {
        writeText: jest.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    const copyButton = screen.getByRole("button", { name: "Copy Code" });
    userEvent.click(copyButton);

    expect(window.navigator.clipboard.writeText).toHaveBeenCalledWith(
      MOCK_PROMO_CODE
    );
  });
});
