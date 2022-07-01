function countUnique(num) {
  let count = {};
  let i = 0;
  let j = num.length - 1;
  while (i <= j) {
    count[num[i]] = (count[num[i]] || 0) + 1;
    count[num[j]] = (count[num[j]] || 0) + 1;
    i++;
    j--;
    if (i == j) {
      count[num[i]] = (count[num[i]] || 0) + 1;
      break;
    }
  }
  return Object.keys(count).length;
}

console.log(
  countUnique([
    1, 1, 2, 2, 3, 10, 10, 6, 7, 4, 3, 4, 5, 5, 5, 5, 5, 5, 5, 6, 6, 7, 7, 8, 8,
    9, 9,
  ])
);
