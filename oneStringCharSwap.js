

function areAlmostEqual(s1, s2) {
  if (s1 === s2) return true;
  if (s1.length != s2.length) return true;

  let firstIndex = 0;
  let secondIndex = 0;
  let diff = 0;

  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      diff++;
      if (diff > 2) {
        return false;
      } else if (diff === 1) {
        firstIndex = i;
      } else if (diff == 2) {
        secondIndex = i;
      }
    }
  }

  return s1[firstIndex] == s2[secondIndex] && s1[secondIndex] == s2[firstIndex];
}

let s1 = "bank";
let s2 = "kanb";

console.log(areAlmostEqual(s1, s2));
