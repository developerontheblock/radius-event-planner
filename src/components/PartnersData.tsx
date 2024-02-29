import { usePartnersData } from "../hooks/partners";

const PartnersData = () => {
  const partnersData = usePartnersData();

  return (
    <>
      <div id="partners-table">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Partner ID</th>
              <th className="border border-gray-300 px-4 py-2">Partner Name</th>
            </tr>
          </thead>
          <tbody>
            {partnersData.map((partner) => (
              <tr key={partner.id}>
                <td className="border border-gray-300 px-4 py-2">
                  {partner.id}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {partner.name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PartnersData;
