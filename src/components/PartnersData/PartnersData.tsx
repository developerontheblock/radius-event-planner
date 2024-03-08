import { useEffect, useState } from "react";
import { useData, usePartnersData, useSearch } from "../../hooks";
import Search from "../Search/Search";
import MainTable from "../Table/MainTable";
import Dropdown from "../Dropdown/Dropdown";

const PartnersData = () => {
  const [distance, setDistance] = useState(100);
  const [selectedRadius, setSelectedRadius] = useState("100");
  const [rowsToShow, setRowsToShow] = useState<number | "All">(5);

  const partnersData = usePartnersData(distance);
  const { searchTerm, setSearchTerm, filteredPartners } =
    useSearch(partnersData);
  const { setRecordCount } = useData();

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

  const handleRadiusChange = (value: string | number) => {
    setSelectedRadius(String(value));
    setDistance(Number(value));
  };

  return (
    <>
      <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Dropdown
        label="Table rows to display:"
        selectedValue={rowsToShow}
        options={[5, 10, 20, "All"]}
        onChange={(value: string | number | "All") =>
          handleRowsChange(value as number | "All")
        }
      />
      <Dropdown
        label="Select Radius in km (max):"
        selectedValue={selectedRadius}
        options={[50, 100, 150, 200]}
        onChange={handleRadiusChange}
      />
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
