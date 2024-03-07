import { useEffect, useState } from "react";
import { Partner } from "../components/types/partner";
import { calculateDistance } from "./distance";

export const usePartnersData = (filterDistance: number) => {
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

        const filteredPartners = parsedPartners.filter((partner: Partner) => {
          return (
            calculateDistance(
              partner.coordinates.latitude,
              partner.coordinates.longitude
            ) <= filterDistance
          );
        });

        const sortedPartners = filteredPartners.sort(
          (a: Partner, b: Partner) => {
            return parseInt(a.id) - parseInt(b.id);
          }
        );
        setPartnersData(sortedPartners);
      })
      .catch((error) => console.error("Error fetching partners data:", error));
  }, [filterDistance]);

  return partnersData;
};
