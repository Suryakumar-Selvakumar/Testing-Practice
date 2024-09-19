export function caesarCipher(string, shift) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("");
  const shiftedArray = [];
  let shiftedStr = "";
  const nonAlpha = new RegExp("[^a-zA-Z0-9]");
  string.split("").forEach((element) => {
    for (let i = 0; i < alphabets.length; i++) {
      if (element.toLowerCase() == alphabets[i]) {
        if (i + shift >= alphabets.length) {
          if (element === element.toUpperCase()) {
            shiftedStr +=
              alphabets[shift - (alphabets.length - i)].toUpperCase();
          } else {
            shiftedStr += alphabets[shift - (alphabets.length - i)];
          }
        } else {
          if (element === element.toUpperCase()) {
            shiftedStr += alphabets[i + shift].toUpperCase();
          } else {
            shiftedStr += alphabets[i + shift];
          }
        }
      } else if (nonAlpha.test(element)) {
        shiftedStr += element;
        break;
      }
    }
  });

  return shiftedStr;
}
