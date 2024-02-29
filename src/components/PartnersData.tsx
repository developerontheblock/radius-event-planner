import { usePartnersData } from "../hooks/partners";

const PartnersData = () => {
  const partnersData = usePartnersData();

  return (
    <div>
      {partnersData.map((partner, index) => (
        <div key={index}>
          <p>Name: {partner.name}</p>
          <p>Partner ID: {partner.id}</p>
          <p>Latitude: {partner.coordinates.latitude}</p>
          <p>Longitude: {partner.coordinates.latitude}</p>
        </div>
      ))}
    </div>
  );
};

export default PartnersData;
