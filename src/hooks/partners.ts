import { useEffect, useState } from "react";

type Partner = {
  id: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export const usePartnersData = () => {
  const [partnersData, setPartnersData] = useState<Partner[]>([]);

  useEffect(() => {
    fetch("/partners.txt")
      .then((response) => response.text())
      .then((text) => {
        const partnersData = text
          .split("\n")
          .filter((line) => line.trim() !== "");
        const parsedPartners: Partner[] = partnersData.map((partnerStr) => {
          const partnerData = JSON.parse(partnerStr);
          const partner: Partner = {
            id: partnerData.partner_id.toString(),
            name: partnerData.name,
            coordinates: {
              latitude: parseFloat(partnerData.latitude),
              longitude: parseFloat(partnerData.longitude),
            },
          };
          return partner;
        });
        setPartnersData(parsedPartners);
      })
      .catch((error) => console.error("Error fetching partners data:", error));
  }, []);

  return partnersData;
};
