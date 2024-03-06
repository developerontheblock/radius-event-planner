import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Sidebar from "./Sidebar";

jest.mock("./EventsDropdown", () => () => (
  <div data-testid="mockedEventDropdown">EventDropdown</div>
));

describe("Sidebar", () => {
  it("renders correctly with title and EventDropdown", () => {
    render(<Sidebar />);

    const sidebarElement = screen.getByTestId("sidebar");
    expect(sidebarElement).toBeInTheDocument();

    const titleElement = screen.getByText("Event Details");
    expect(titleElement).toBeInTheDocument();

    const eventDropdown = screen.getByTestId("mockedEventDropdown");
    expect(eventDropdown).toBeInTheDocument();
    expect(eventDropdown.textContent).toBe("EventDropdown");
  });
});
