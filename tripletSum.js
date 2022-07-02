function tripletSum(arr, n, sum) {
  let i = 0;
  let r = n - 1;
  let l = i + 1;
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  while (i < r) {
    if (parseInt(arr[i]) + parseInt(arr[l]) + parseInt(arr[r]) == sum) {
      return true;
    } else if (parseInt(arr[i]) + parseInt(arr[l]) + parseInt(arr[r]) > sum) {
      r--;
    } else if (parseInt(arr[i]) + parseInt(arr[l]) + parseInt(arr[r]) < sum) {
      l++;
    }
    if (l == r || l > r) {
      i++;
      r = n - 1;
      l = i + 1;
    }
  }

  return false;
}

const array =
  "557 217 627 358 527 358 338 272 870 362 897 23 618 113 718 697 586 42 424 130 230 566 560 933".split(
    " "
  );

console.log(tripletSum(array, 24, 986));
