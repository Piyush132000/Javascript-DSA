function canSortArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      if (nums[j] < nums[j + 1]) {
        continue;
      } else {
        if (counts(nums[j]) == counts(nums[j + 1])) {
          [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        } else {
          return false;
        }
      }
    }
  }
  return true;
}

console.log(canSortArray([8, 4, 2, 30, 15]));

function counts(i) {
  return i.toString(2).match(/1/g).length;
}

let dp = [];

var tribonacci = function (n) {
  if (dp[n]) {
    return dp[n];
  }

  if (n == 0) {
    return 0;
  }

  if (n == 1 || n == 2) {
    return 1;
  }

  return (dp[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3));
};

console.log(tribonacci(4));
