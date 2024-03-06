import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header component", () => {
  const titleText = "Test Header Title";

  it("renders correctly", () => {
    render(<Header title={titleText} />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toBeInTheDocument();
  });

  it("has the correct styling classes", () => {
    render(<Header title={titleText} />);
    const headerElement = screen.getByTestId("header");
    expect(headerElement).toHaveClass("bg-gray-800 text-white py-4");
  });
});
