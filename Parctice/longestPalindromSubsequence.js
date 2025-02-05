function subSequence(array, start, end, dp) {
  if (start == end) {
    list.push([...dp]);
    return;
  }

  dp.push(array[start]);
  subSequence(array, start + 1, end, dp);
  dp.pop();
  subSequence(array, start + 1, end, dp);
}

// let arr = [3,2,1];

// let list =[];
// subSequence(arr, 0, arr.length, dp);
// console.log(list);

let longestUniqueSubstring = "";

function longestPalindromSubsequence(array, start, end, dp) {
  if (start == end) {
    if ([...dp].join("") === [...dp].reverse().join("")) {
      longestUniqueSubstring =
        longestUniqueSubstring.length > [...dp].join("").length
          ? longestUniqueSubstring
          : [...dp].join("");
    }
    return;
  }

  dp.push(array[start]);
  longestPalindromSubsequence(array, start + 1, end, dp);
  dp.pop();
  longestPalindromSubsequence(array, start + 1, end, dp);
}

let string = "bbabcbcab";
let array = string.split("");

// console.log(array);
//let dp = [];
// longestPalindromSubsequence(array, 0, array.length, dp);
// console.log(longestUniqueSubstring);

function longestSubsequence(s1, s2, i, j) {
  if (i < 0 || j < 0) {
    return 0;
  }

  if (dp[i][j]) {
    return dp[i][j];
  }

  if (s1[i] == s2[j]) {
    return (dp[i][j] = 1 + longestSubsequence(s1, s2, i - 1, j - 1));
  }

  return (dp[i][j] =
    0 +
    Math.max(
      longestSubsequence(s1, s2, i - 1, j),
      longestSubsequence(s1, s2, i, j - 1)
    ));
}

let string1 = "abcde";
let string2 = "bdgek";
let dp = new Array(string.length);
for (let i = 0; i < dp.length; i++) {
  dp[i] = new Array(string2.length);
}
let subSeq = "";
console.log(longestSubsequenceByBottomUpApproach(string1, string2));

console.log(subSeq);

function longestSubsequenceByBottomUpApproach(string1, string2) {
  let n = string1.length;
  let m = string2.length;
  let dp = new Array(n + 1);
  for (let i = 0; i <= n + 1; i++) {
    dp[i] = new Array(m + 1);
  }
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (string1[i - 1] == string2[j - 1]) {
        dp[i][j] = 1 + (dp[i - 1][j - 1] || 0);
      } else {
        dp[i][j] = Math.max((dp[i - 1][j] || 0), (dp[i][j - 1] || 0));
      }
    }
  }

  let i = n,
    j = m;
  let subS = new Array(dp[n][m]);
  let index = dp[n][m] - 1;
  while (i > 0 && j > 0) {
    if (string1[i - 1] == string2[j - 1]) {
      subS[index] = string1[i - 1];
      index--;
      i--;
      j--;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      i--;
    } else {
      j--;
    }
  }

  subSeq = subS.join("");

  return dp[n][m];
}





