import { convertDegreesToRadians } from "./distance";

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
