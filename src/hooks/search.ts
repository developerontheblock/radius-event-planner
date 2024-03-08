import { useState, useEffect } from "react";
import { Partner } from "../types";

export const useSearch = (initialPartners: Partner[]) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPartners, setFilteredPartners] =
    useState<Partner[]>(initialPartners);

  useEffect(() => {
    const filtered = initialPartners.filter((partner) =>
      partner.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredPartners(filtered);
  }, [searchTerm, initialPartners]);

  return { searchTerm, setSearchTerm, filteredPartners };
};
