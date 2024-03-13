function isPlaindrom(string, left, right) {
  if (left == right) {
    return true;
  }
  if (string.charAt(left) != string.charAt(right)) {
    return false;
  }

  if (left < right + 1) {
    return isPlaindrom(string, left + 1, right - 1);
  }
}

function checkPlindrom(string) {
  if (string.length == 0) {
    return true;
  }

  return isPlaindrom(string, 0, string.length - 1);
}

const s = "stsy";

console.log(checkPlindrom(s));
