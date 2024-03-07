type RowsDropdownProps = {
  selectedValue: number | "All";
  onChange: (newValue: number | "All") => void;
};

const options = [5, 10, 20, "All"];

const RowsDropdown = ({ selectedValue, onChange }: RowsDropdownProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="row-count" className="block text-l font-semibold mb-4">
        Rows per page:
      </label>
      <select
        id="row-count"
        value={selectedValue}
        onChange={(e) => {
          if (e.target.value === "All") {
            onChange("All");
          } else {
            onChange(Number(e.target.value));
          }
        }}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
      >
        {options.map((value) => (
          <option key={value} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default RowsDropdown;
