function upperCase(string: string) {
  return string.charCodeAt(0) >= 65 && string.charCodeAt(0) <= 90;
}

function camelcase(s: string) {
  return s.split("").filter((letter) => upperCase(letter)).length + 1;
}
