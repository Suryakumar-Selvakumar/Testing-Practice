export function capitalize(string) {
  return [
    string.split("").shift().toUpperCase(),
    ...string.split("").toSpliced(0, 1),
  ].join("");
}
