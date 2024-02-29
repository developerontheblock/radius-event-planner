import { usePartnersData } from "../hooks/partners";

const PartnersData = () => {
  const partnersData = usePartnersData();

  return <div>{partnersData}</div>;
};

export default PartnersData;
