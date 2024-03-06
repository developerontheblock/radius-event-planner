import { render, screen } from "@testing-library/react";
import TotalRecords from "./TotalRecords";
import * as dataProvider from "../PartnersData/DataProvider";

jest.mock("../PartnersData/DataProvider", () => ({
  useData: jest.fn(),
}));

describe("TotalRecords component", () => {
  it("displays the record count correctly", () => {
    (dataProvider.useData as jest.Mock).mockImplementation(() => ({
      recordCount: 5,
    }));

    render(<TotalRecords />);

    expect(screen.getByText("Total Records: 5")).toBeInTheDocument();
  });
});
