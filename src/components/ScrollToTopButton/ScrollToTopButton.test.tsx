import { fireEvent, render } from "@testing-library/react";
import ScrollToTopButton from "./ScrollToTopButton";

describe("ScrollToTopButton", () => {
  beforeEach(() => {
    global.scrollTo = jest.fn();
  });

  it("is hidden by default", () => {
    const { queryByRole } = render(<ScrollToTopButton />);
    expect(queryByRole("button")).not.toBeInTheDocument();
  });

  it("becomes visible after scrolling down more than 100px", () => {
    const { queryByRole } = render(<ScrollToTopButton />);
    fireEvent.scroll(window, { target: { scrollY: 101 } });
    expect(queryByRole("button")).not.toHaveStyle("display: none");
  });

  afterEach(() => {
    (global.scrollTo as jest.Mock).mockRestore();
  });
});
