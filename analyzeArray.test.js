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

test("analyzeArray returns the average of nos. from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toEqual(1);
});

test("analyzeArray returns the average of nos. from array", () => {
  expect(analyzeArray([3, 4, 5, 6, 7, 8]).min).toBeCloseTo(3);
});

test("analyzeArray returns the average of nos. from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toEqual(8);
});

test("analyzeArray returns the average of nos. from array", () => {
  expect(analyzeArray([3, 4, 5, 6, 7, 11]).max).toEqual(11);
});

test("analyzeArray returns the average of nos. from array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toEqual(6);
});

test("analyzeArray returns the average of nos. from array", () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).length).toEqual(10);
});
