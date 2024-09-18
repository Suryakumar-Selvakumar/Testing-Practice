import { reverseString } from "./reverseString.js";

test("reverseString exists", () => {
  expect(reverseString).toBeDefined();
});

test.skip("reverseString returns a string", () => {
  expect(reverseString("string")).toEqual("string");
});

test("reverseString returns a reversed string (Ex-1)", () => {
  expect(reverseString("man")).toEqual("nam");
});

test("reverseString returns a reversed string (Ex-2)", () => {
  expect(reverseString("phone")).toEqual("enohp");
});
