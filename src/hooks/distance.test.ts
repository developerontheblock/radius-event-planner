import {
  convertDegreesToRadians,
  calculateDistance,
  OfficeCoordinates,
} from "./distance";

describe("convertDegreesToRadians", () => {
  it("converts 0 degrees to 0 radians", () => {
    expect(convertDegreesToRadians(0)).toBeCloseTo(0);
  });

  it("converts 180 degrees to PI radians", () => {
    expect(convertDegreesToRadians(180)).toBeCloseTo(Math.PI);
  });

  it("converts 360 degrees to 2PI radians", () => {
    expect(convertDegreesToRadians(360)).toBeCloseTo(2 * Math.PI);
  });

  it("correctly converts a negative angle", () => {
    expect(convertDegreesToRadians(-180)).toBeCloseTo(-Math.PI);
  });

  it("correctly converts a non-integer angle", () => {
    expect(convertDegreesToRadians(45.5)).toBeCloseTo(45.5 * (Math.PI / 180));
  });
});

describe("calculateDistance", () => {
  it("calculates distance correctly to a known point", () => {
    const lat = 42.1605961;
    const lon = 24.7851846;
    const distance = calculateDistance(lat, lon);

    expect(distance).toBeCloseTo(1.38, 1);
  });

  it("returns 0 when the destination is the same as the office", () => {
    const distance = calculateDistance(
      OfficeCoordinates.LATITUDE,
      OfficeCoordinates.LONGITUDE
    );
    expect(distance).toBe(0);
  });

  it("calculates a reasonable distance to a faraway point", () => {
    const lat = 52.5200066;
    const lon = 13.404954;
    const distance = calculateDistance(lat, lon);

    expect(distance).toBeGreaterThan(100);
  });
});
