import { caesarCipher } from "./caesarCipher.js";

test("caesarCipher exists", () => {
  expect(caesarCipher).toBeDefined();
});

test("caesarCipher returns a string", () => {
  expect(caesarCipher("str")).toMatch(/[\s\S]*/);
});

test("caesarCipher returns the shifted string (ex-1)", () => {
  expect(caesarCipher("def", 3)).toMatch("ghi");
});

test("caesarCipher returns the shifted string (ex-2)", () => {
  expect(caesarCipher("str", 2)).toMatch("uvt");
});

test("caesarCipher returns the shifted string (ex-3)", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});

test("caesarCipher returns the shifted string (ex-3)", () => {
  expect(caesarCipher("xyz", 4)).toMatch("bcd");
});
