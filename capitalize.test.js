import { capitalize } from "./capitalize.js";

test("Capitalize exists", () => {
  expect(capitalize).toBeDefined();
});

test.skip("Capitalize returns a string", () => {
  expect(capitalize("string")).toEqual("string");
});

test("Capitalize returns a string with first letter capitalized", () => {
  expect(capitalize("string")).toEqual("String");
});

test("Capitalize returns a string with first letter capitalized", () => {
    expect(capitalize("man")).toEqual("Man");
  });

test("Capitalize returns a string with first letter capitalized", () => {
    expect(capitalize("banana")).toEqual("Banana");
  });