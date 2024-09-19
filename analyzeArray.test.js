import { analyzeArray } from "./analyzeArray.js";

test("analyzeArray exists", () => {
  expect(analyzeArray).toBeDefined();
});

test("analyzeArray returns an object", () => {
  expect(analyzeArray()).toMatchObject({});
});

test("analyzeArray returns an object with average, min, max & lengthd properties", () => {
  expect(analyzeArray()).toHaveProperty("average");
  expect(analyzeArray()).toHaveProperty("min");
  expect(analyzeArray()).toHaveProperty("max");
  expect(analyzeArray()).toHaveProperty("length");
});

test("analyzeArray returns the average of nos. from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toEqual(4);
});

test("analyzeArray returns the average of nos. from array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8]).average).toBeCloseTo(4.5);
});
