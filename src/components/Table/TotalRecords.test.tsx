import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import TotalRecords from "./TotalRecords";
import { useData } from "../../hooks";

jest.mock("../../hooks", () => ({
  useData: jest.fn(),
}));

const useDataMock = jest.mocked(useData);

describe("TotalRecords component", () => {
  it("displays the record count correctly", () => {
    useDataMock.mockImplementation(() => ({
      recordCount: 5,
      setRecordCount: jest.fn(),
    }));

    render(<TotalRecords />);

    expect(screen.getByText("Total Records: 5")).toBeInTheDocument();
  });
});
