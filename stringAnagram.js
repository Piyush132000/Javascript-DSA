function stringAnagram(str1, str2) {
  if (str1.length != str2.length) {
    return false;
  }

  let count = {};
  let i = 0;
  let j = str1.length-1;
  while(i <= j) {
    count[str1[i]] = (count[str1[i]] || 0) + 1;
    count[str1[j]] = (count[str1[j]] || 0) + 1;
    i++;
    j--;
    if (i == j) {
        count[str1[i]] = (count[str1[i]] || 0) + 1;
        break;
      }
  }

  for (let char of str2) {
    if (!count[char]) {
      return false;
    }

    count[char] -= 1;
  }

  return true;
}

console.log(stringAnagram("hello", "llheo"));
