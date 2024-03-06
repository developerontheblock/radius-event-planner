import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

describe("Footer", () => {
  it("renders without crashing", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });

  it("displays the current year", () => {
    render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(screen.getByText(`© ${currentYear}`)).toBeInTheDocument();
  });

  it("has the correct structure and styling", () => {
    render(<Footer />);
    const footerElement = screen.getByTestId("footer");
    expect(footerElement).toHaveClass(
      "bg-gray-800 text-white py-4 text-center mt-auto"
    );

    const containerDiv = footerElement.querySelector(".mx-auto");
    expect(containerDiv).toBeInTheDocument();
  });
});
