export type Partner = {
  id: string;
  name: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
};

export type PartnerTableData = {
  id: string;
  name: string;
};
