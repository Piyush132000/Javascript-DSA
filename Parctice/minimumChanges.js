function isCircularSentence(sentence) {
  let arr = sentence.split(" ");

  if (arr.length == 1) {
    return arr[0][0] == arr[0][arr[0].length - 1];
  } else {
    for (let i = 1; i <= arr.length; i++) {
     
      
      if (arr[i][0] != arr[i - 1][arr[i - 1].length - 1]) {
        return false;
      }
      if (i == arr.length - 1) {
        return arr[0][0] === arr[i][arr[i].length - 1];
      }
    }
  }

  return true;
}

console.log(isCircularSentence("Leetcode is cool"));
