import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Dropdown from "./Dropdown";

const onChangeMock = jest.fn();

const options = ["Option 1", "Option 2", "All"];
const label = "Test Dropdown";

describe("Dropdown", () => {
  it("displays the label", () => {
    render(
      <Dropdown
        label={label}
        selectedValue="All"
        options={options}
        onChange={onChangeMock}
      />
    );
    expect(screen.getByText(label)).toBeInTheDocument();
  });

  it("renders all options", () => {
    render(
      <Dropdown
        label={label}
        selectedValue="All"
        options={options}
        onChange={onChangeMock}
      />
    );
    options.forEach((option) => {
      expect(screen.getByRole("option", { name: option })).toBeInTheDocument();
    });
  });

  it('correctly sets the initial selected value as "All"', () => {
    render(
      <Dropdown
        label={label}
        selectedValue="All"
        options={options}
        onChange={onChangeMock}
      />
    );

    const selectedOption = screen.getByRole("option", {
      name: "All",
    }) as HTMLOptionElement;
    expect(selectedOption.selected).toBeTruthy();
  });

  it("updates selected value when prop changes", () => {
    const { rerender } = render(
      <Dropdown
        label={label}
        selectedValue="Option 1"
        options={options}
        onChange={onChangeMock}
      />
    );

    let option1 = screen.getByRole("option", {
      name: "Option 1",
    }) as HTMLOptionElement;
    expect(option1.selected).toBe(true);

    rerender(
      <Dropdown
        label={label}
        selectedValue="Option 2"
        options={options}
        onChange={onChangeMock}
      />
    );

    let option2 = screen.getByRole("option", {
      name: "Option 2",
    }) as HTMLOptionElement;
    expect(option2.selected).toBe(true);
  });
});
