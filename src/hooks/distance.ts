export enum OfficeCoordinates {
  LATITUDE = 42.1505961,
  LONGITUDE = 24.7751846,
}

export const convertDegreesToRadians = (degrees: number): number => {
  return degrees * (Math.PI / 180);
};

export const calculateDistance = (lat: number, lon: number): number => {
  const earthRadiusInKm = 6371;
  const latitudeBetweenTwoPoints = convertDegreesToRadians(
    lat - OfficeCoordinates.LATITUDE
  );

  const longitudeBetweenTwoPoints = convertDegreesToRadians(
    lon - OfficeCoordinates.LONGITUDE
  );

  const centralAngleBetweenTwoPointsOnTheSurfaceOfSphere =
    Math.sin(latitudeBetweenTwoPoints / 2) *
      Math.sin(latitudeBetweenTwoPoints / 2) +
    Math.cos(convertDegreesToRadians(OfficeCoordinates.LATITUDE)) *
      Math.cos(convertDegreesToRadians(lat)) *
      Math.sin(longitudeBetweenTwoPoints / 2) *
      Math.sin(longitudeBetweenTwoPoints / 2);

  const angularDistanceInRadians =
    2 *
    Math.atan2(
      Math.sqrt(centralAngleBetweenTwoPointsOnTheSurfaceOfSphere),
      Math.sqrt(1 - centralAngleBetweenTwoPointsOnTheSurfaceOfSphere)
    );

  const distanceInKm = earthRadiusInKm * angularDistanceInRadians;

  return distanceInKm;
};
