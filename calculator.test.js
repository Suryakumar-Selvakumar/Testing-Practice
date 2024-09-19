import { calculator } from "./calculator.js";

describe("Calculator", () => {
  it("exists", () => {
    expect(calculator).toBeDefined();
  });

  it("add, subtract, multiply, divide functions exist", () => {
    expect(calculator.add).toBeDefined();
    expect(calculator.subtract).toBeDefined();
    expect(calculator.multiply).toBeDefined();
    expect(calculator.divide).toBeDefined();
  });

  it.each([
    [2, 3, 5],
    [54, 37, 91],
    [643, 999, 1642],
  ])(".add(%i, %i) works and returns %i", (a, b, expected) => {
    expect(calculator.add(a, b)).toBe(expected);
  });

  it.each([
    [2, 3, -1],
    [54, 37, 17],
    [643, 999, -356],
  ])(".subtract(%i, %i) works and returns %i", (a, b, expected) => {
    expect(calculator.subtract(a, b)).toBe(expected);
  });

  it.each([
    [2, 3, 6],
    [54, 37, 1998],
    [643, 999, 642357],
  ])(".Multiply(%i, %i) works and returns %i", (a, b, expected) => {
    expect(calculator.multiply(a, b)).toBe(expected);
  });

  it.each([
    [2, 3, 0.67],
    [54, 37, 1.459],
    [643, 999, 0.64],
  ])(".Divide(%i, %i) works and returns %i", (a, b, expected) => {
    expect(calculator.divide(a, b)).toBeCloseTo(expected);
  });
});
