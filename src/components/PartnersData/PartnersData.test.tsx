import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import PartnersData from "./PartnersData";
import { useData, usePartnersData, useSearch } from "../../hooks";

jest.mock("../../hooks", () => ({
  useData: jest.fn(),
  usePartnersData: jest.fn(),
  useSearch: jest.fn(),
}));

jest.mock(
  "../Search/Search",
  () =>
    (props: {
      searchTerm: string | number | readonly string[] | undefined;
      setSearchTerm: (arg0: string) => void;
    }) =>
      (
        <input
          placeholder="Search..."
          value={props.searchTerm}
          onChange={(e) => props.setSearchTerm(e.target.value)}
          data-testid="search-input"
        />
      )
);

jest.mock(
  "../Table/MainTable",
  () =>
    (props: {
      partners: {
        id: string;
        name: string;
      }[];
    }) =>
      (
        <div data-testid="main-table">
          {props.partners.map((partner: { id: string; name: string }) => (
            <div key={partner.id}>{partner.name}</div>
          ))}
        </div>
      )
);

const usePartnersDataMock = jest.mocked(usePartnersData);
const useSearchMock = jest.mocked(useSearch);
const useDataMock = jest.mocked(useData);

describe("PartnersData", () => {
  it("renders correctly", () => {
    usePartnersDataMock.mockReturnValue([]);
    useSearchMock.mockReturnValue({
      searchTerm: "",
      setSearchTerm: jest.fn(),
      filteredPartners: [],
    });
    useDataMock.mockReturnValue({
      setRecordCount: jest.fn(),
      recordCount: 0,
    });

    render(<PartnersData />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
    expect(screen.getByTestId("main-table")).toBeInTheDocument();
  });

  it("sets record count correctly based on filtered partners", () => {
    const setRecordCountMock = jest.fn();
    usePartnersDataMock.mockReturnValue([
      {
        id: "1",
        name: "Partner One",
        coordinates: { latitude: 0, longitude: 0 },
      },
      {
        id: "2",
        name: "Partner Two",
        coordinates: { latitude: 0, longitude: 0 },
      },
    ]);

    useSearchMock.mockImplementation(
      jest.fn(() => ({
        searchTerm: "",
        setSearchTerm: jest.fn(),
        filteredPartners: [
          {
            id: "1",
            name: "Partner One",
            coordinates: { latitude: 0, longitude: 0 },
          },
        ],
      }))
    );

    useDataMock.mockReturnValue({
      recordCount: 0,
      setRecordCount: setRecordCountMock,
    });

    render(<PartnersData />);
    expect(setRecordCountMock).toHaveBeenCalledWith(1);
  });
});
