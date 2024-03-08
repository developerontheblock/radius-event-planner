import { PartnerTableData } from "../../types";

type MainTableProps = {
  partners: PartnerTableData[];
};

const MainTable = ({ partners }: MainTableProps) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full table-auto">
        <thead className="border-b bg-gray-800 text-white">
          <tr>
            <th
              scope="col"
              className="w-1/6 text-sm font-medium px-6 py-4 text-left rounded-l-lg"
            >
              ID
            </th>
            <th
              scope="col"
              className="w-5/6 text-sm font-medium px-6 py-4 text-left pl-12 rounded-r-lg"
            >
              Name
            </th>
          </tr>
        </thead>
        <tbody>
          {partners.map((partner) => (
            <tr className="border-b" key={partner.id}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {partner.id}
              </td>
              <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap pl-12">
                {partner.name}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
