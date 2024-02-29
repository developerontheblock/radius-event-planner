import { useEffect, useState } from "react";

export const usePartnersData = () => {
  const [partnersData, setPartnersData] = useState<string>("");

  useEffect(() => {
    const fetchPartnersData = async () => {
      try {
        const response = await fetch("/partners.txt");
        if (!response.ok) {
          throw new Error("Failed to fetch partners data");
        }
        const text = await response.text();
        setPartnersData(text);
      } catch (error) {
        console.error("Error fetching partners data:", error);
      }
    };

    fetchPartnersData();
  }, []);

  return partnersData;
};
