class EditDistance {
  findDistance(word1, word2) {
    let m = word1.length;
    let n = word2.length;


    if(m < n) return this.findDistance(word2, word1);


    let current = Array(n+1).fill(0)
    let previous= Array(n+1).fill((data, i)=> i+1);

    for (let i = 1; i <=m; i++) {
      for (let j = 1; j <=n; j++) {
        if (word1[i - 1] === word2[j - 1]) {
          current[j] =   previous[j-1];
        } else {
          current[j] =1+ Math.min(previous[j], current[j - 1], previous[j - 1]);
        }
      }
      [current, previous] = [previous, current]
    }

    return previous[n];
  }

}




const obj = new EditDistance();

console.log(obj.findDistance("horse","ros"));