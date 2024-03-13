function tripletSum(arr, n, sum) {
  let i = 0;
  let r = n - 1;
  let l = i + 1;
  if (arr.length < 3) {
    return [];
  }
  arr = arr.sort(function (a, b) {
    return a - b;
  });
  let result = new Set();
  while (i < r) {
    if (parseInt(arr[i]) + parseInt(arr[l]) + parseInt(arr[r]) == sum) {
      if (!result.has([arr[i], arr[l], arr[r]])) {
        result.add([arr[i], arr[l], arr[r]]);
      }
      ++i;
      l = i + 1;
      r = n - 1;
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

  return result;
}

const array =
  "557 217 627 358 527 358 338 272 870 362 897 23 618 113 718 697 586 42 424 130 230 566 560 933".split(
    " "
  );

console.log(tripletSum([-2, 0, 1, 1, 2], [-2, 0, 1, 1, 2].length, 0));
