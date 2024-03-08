type DropdownProps = {
  label: string;
  selectedValue: string | number | "All";
  options: (string | number)[];
  onChange: (value: string | number | "All") => void;
};

const Dropdown = ({
  label,
  selectedValue,
  options,
  onChange,
}: DropdownProps) => {
  return (
    <div className="mb-4">
      <label htmlFor="dropdown" className="block text-md mb-2">
        {label}
      </label>
      <select
        id="dropdown"
        value={selectedValue}
        onChange={(e) => {
          const value = e.target.value;
          if (value === "All") {
            onChange(value);
          } else {
            onChange(isNaN(Number(value)) ? value : Number(value));
          }
        }}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base bg-gray-200 border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
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

export default Dropdown;
