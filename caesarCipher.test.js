import { caesarCipher } from "./caesarCipher.js";

test("caesarCipher exists", () => {
  expect(caesarCipher).toBeDefined();
});

test("caesarCipher returns a string", () => {
  expect(caesarCipher("str", 2)).toMatch(/[a-zA-Z]*/);
});

test("caesarCipher returns the shifted string (ex-1)", () => {
  expect(caesarCipher("def", 3)).toEqual("ghi");
});

test("caesarCipher returns the shifted string (ex-2)", () => {
  expect(caesarCipher("str", 2)).toEqual("uvt");
});

test("caesarCipher returns the shifted string (ex-3)", () => {
  expect(caesarCipher("xyz", 3)).toEqual("abc");
});

test("caesarCipher returns the shifted string with the same case", () => {
  expect(caesarCipher("HeLLo", 3)).toEqual("KhOOr");
});

test("caesarCipher returns the shifted string with punctuation (ex-1)", () => {
  expect(caesarCipher("Hello, World!", 3)).toEqual("Khoor, Zruog!");
});

test("caesarCipher returns the shifted string with punctuation (ex-2)", () => {
  expect(caesarCipher("Hello,, World!", 3)).toEqual("Khoor,, Zruog!");
});
