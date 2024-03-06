import { render, fireEvent, screen } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  const setup = (initialSearchTerm = "") => {
    const setSearchTerm = jest.fn();
    render(
      <Search searchTerm={initialSearchTerm} setSearchTerm={setSearchTerm} />
    );
    const input = screen.getByPlaceholderText("Search partner by name...");
    return { input, setSearchTerm };
  };

  it("renders correctly with initial searchTerm", () => {
    const { input } = setup("initial");
    expect((input as HTMLInputElement).value).toBe("initial");
  });

  it("allows typing in the search input", () => {
    const { input, setSearchTerm } = setup();
    fireEvent.change(input, { target: { value: "new search term" } });
    expect(setSearchTerm).toHaveBeenCalledWith("new search term");
  });

  it("reflects the change when searchTerm is updated", () => {
    const searchTerm = "initial";
    const { input, setSearchTerm } = setup(searchTerm);
    fireEvent.change(input, { target: { value: "updated search term" } });
    expect(setSearchTerm).toHaveBeenCalledWith("updated search term");
  });
});
