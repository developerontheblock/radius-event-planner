import { useEffect, useState } from "react";
import { useData, usePartnersData, useSearch } from "../../hooks";
import Search from "../Search/Search";
import MainTable from "../Table/MainTable";
import RowsDropdown from "../Table/RowsDropdown";

const PartnersData = () => {
  const partnersData = usePartnersData(100);

  const { searchTerm, setSearchTerm, filteredPartners } =
    useSearch(partnersData);
  const { setRecordCount } = useData();
  const [rowsToShow, setRowsToShow] = useState<number | "All">(5);

  useEffect(() => {
    setRecordCount(filteredPartners.length);
  }, [filteredPartners, setRecordCount]);

  const displayedPartners =
    rowsToShow === "All"
      ? filteredPartners
      : filteredPartners.slice(0, rowsToShow);

  const handleRowsChange = (newValue: number | "All") => {
    setRowsToShow(newValue);
  };

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <RowsDropdown selectedValue={rowsToShow} onChange={handleRowsChange} />
      <MainTable partners={displayedPartners} />
      {filteredPartners.length === 0 && (
        <div className="text-center py-4">
          No partners found matching "{searchTerm}".
        </div>
      )}
    </>
  );
};

export default PartnersData;
