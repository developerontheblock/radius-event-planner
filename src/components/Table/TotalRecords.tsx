import { useData } from "../../hooks";

const TotalRecords = () => {
  const { recordCount } = useData();

  return (
    <div className="grid place-items-center">
      <div className="bg-blue-500 text-white mt-5 py-2.5 px-2.5 rounded-full shadow">
        Total Records: {recordCount}
      </div>
    </div>
  );
};

export default TotalRecords;
