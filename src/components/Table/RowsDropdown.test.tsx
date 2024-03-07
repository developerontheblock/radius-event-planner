import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import RowsDropdown from "./RowsDropdown";

describe("RowsDropdown", () => {
  const handleChange = jest.fn();

  it("renders with the correct selected value", () => {
    render(<RowsDropdown selectedValue={10} onChange={handleChange} />);
    const dropdown = screen.getByLabelText(
      /rows per page:/i
    ) as HTMLInputElement;
    expect(dropdown.value).toBe("10");
  });

  it("calls onChange with a number when a numeric option is selected", () => {
    render(<RowsDropdown selectedValue={5} onChange={handleChange} />);
    const dropdown = screen.getByLabelText(
      /rows per page:/i
    ) as HTMLInputElement;
    fireEvent.change(dropdown, { target: { value: "20" } });
    expect(handleChange).toHaveBeenCalledWith(20);
  });

  it('calls onChange with "All" when the option is selected', () => {
    render(<RowsDropdown selectedValue="All" onChange={handleChange} />);
    const dropdown = screen.getByLabelText(/rows per page:/i);
    fireEvent.change(dropdown, { target: { value: "All" } });
    expect(handleChange).toHaveBeenCalledWith("All");
  });
});
