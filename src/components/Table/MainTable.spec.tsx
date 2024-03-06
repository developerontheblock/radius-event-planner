import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import MainTable from "./MainTable";

describe("MainTable", () => {
  const partners = [
    { id: "1", name: "Partner One" },
    { id: "2", name: "Partner Two" },
    { id: "3", name: "Partner Three" },
  ];

  it("renders the correct number of partner rows", () => {
    render(<MainTable partners={partners} />);
    const rows = screen.getAllByRole("row");
    expect(rows.length).toBe(partners.length + 1);
  });

  it("displays correct partner information", () => {
    render(<MainTable partners={partners} />);
    partners.forEach((partner) => {
      expect(screen.getByText(partner.id)).toBeInTheDocument();
      expect(screen.getByText(partner.name)).toBeInTheDocument();
    });
  });
});
