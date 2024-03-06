enum OfficeCoordinates {
  LATITUDE = 42.1505961,
  LONGITUDE = 24.7751846,
}

export const convertDegreesToRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

export const calculateDistance = (
  lat: number,
  lon: number
): { latitudeBetweenTwoPoints: number; longitudeBetweenTwoPoints: number } => {
  const latitudeBetweenTwoPoints = convertDegreesToRadians(
    lat - OfficeCoordinates.LATITUDE
  );

  const longitudeBetweenTwoPoints = convertDegreesToRadians(
    lon - OfficeCoordinates.LONGITUDE
  );

  return { latitudeBetweenTwoPoints, longitudeBetweenTwoPoints };
};
