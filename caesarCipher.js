export function caesarCipher(string, shift) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const shiftedArray = [];
  let shiftedStr = "";

  string.split("").forEach((element) => {
    for (let i = 0; i < alphabets.length; i++) {
      if (element == alphabets[i]) {
        if (i + shift >= alphabets.length) {
          shiftedStr += alphabets[shift - (alphabets.length - i)];
        } else {
          shiftedStr += alphabets[i + shift];
        }
      }
    }
  });

  return shiftedStr;
}
