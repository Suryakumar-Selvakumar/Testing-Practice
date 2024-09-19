import { capitalize } from "./capitalize.js";

describe("capitalize", () => {
  it("exists", () => {
    expect(capitalize).toBeDefined();
  });

  it.skip("returns a string", () => {
    expect(capitalize("string")).toEqual("string");
  });

  it.each([
    ["string", "String"],
    ["man", "Man"],
    ["banana", "Banana"],
  ])('returns a string "%s" with first letter capitalized', (input, expected) => {
    expect(capitalize(input)).toEqual(expected);
  });
});
