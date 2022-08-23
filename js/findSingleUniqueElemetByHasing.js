function findSingleElementByHashing(arr) {
  let map = new Map();

  let sum1 = 0;
  let sum2 = 0;
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      sum1 += arr[i];
      map.set(arr[i], 1);
    }

    sum2 += arr[i];
  }

  return 2 * sum1 - sum2;
}

console.log(findSingleElementByHashing([2, 3, 4, 3, 4]));
