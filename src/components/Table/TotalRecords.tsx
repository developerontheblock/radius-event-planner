import { useData } from "../../hooks";

const TotalRecords = () => {
  const { recordCount } = useData();

  return (
    <div className="mt-4 mb-4 flex justify-center">
      <div className="bg-blue-500 text-white py-2 px-4 rounded-full shadow">
        Total Records: {recordCount}
      </div>
    </div>
  );
};

export default TotalRecords;
