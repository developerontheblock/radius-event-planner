import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import EventDropdown from "./EventsDropdown";

describe("EventDropdown", () => {
  beforeAll(() => {
    jest.useFakeTimers(undefined);
    jest.setSystemTime(new Date("2024-04-10"));
  });

  afterAll(() => {
    jest.useRealTimers();
  });

  it("updates the days left message when a new event is selected", () => {
    render(<EventDropdown />);
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "2" } });
    expect(screen.getByText(/days left until the event./)).toHaveTextContent(
      "40 days left until the event."
    );
  });
});
