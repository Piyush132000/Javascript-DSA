function threeSum(arr, index, sum, dp) {
  if (dp.length == 3 && sum == 0) {
    store.push([...dp]);
    return;
  }

  if (index > arr.length) return;

  for (let i = index; i < arr.length; i++) {
    if (i > index && arr[i] === arr[i - 1]) continue;
    dp.push(arr[i]);
    threeSum(arr, i + 1, sum + arr[i], dp);
    dp.pop();
  }
}

let store = [];

let arr = [-1, 0, 1, 2, -1, -4].sort((a, b) => a - b);

threeSum(arr, 0, 0, []);
console.log(store);
