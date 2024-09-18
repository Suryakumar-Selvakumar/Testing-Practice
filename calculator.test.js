import { calculator } from "./calculator.js";

test("Calculator exists", () => {
  expect(calculator).toBeDefined();
});

test("add, subtract, multiply, divide funcs exist", () => {
  expect(calculator.add).toBeDefined();
  expect(calculator.subtract).toBeDefined();
  expect(calculator.multiply).toBeDefined();
  expect(calculator.divide).toBeDefined();
});

test("add function works (ex-1)", () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test("add function works (ex-2)", () => {
  expect(calculator.add(54, 37)).toBe(91);
});

test("add function works (ex-3)", () => {
  expect(calculator.add(643, 999)).toBe(1642);
});

test("subtract function works (ex-1)", () => {
    expect(calculator.subtract(2, 3)).toBe(-1);
})

test("subtract function works (ex-2)", () => {
    expect(calculator.subtract(54, 37)).toBe(17);
  });

test("subtract function works (ex-3)", () => {
    expect(calculator.subtract(643, 999)).toBe(-356);
  });
