
 function subSequence(str1, str2){
    let n = str1.length;
    let m = str2.length;
    let dp = new Array(n+1);
    for(let i=0; i < n+1; i < i++){
        dp[i]= new Array(m+1).fill(0);
    }

    for(let i=1 ; i <=n; i++){
        for(let j =1; j<=m;j++){
            if(str1[i-1]==str2[j-1]){
                dp[i][j]= 1+ dp[i-1][j-1];
            } else {
                dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
            }
        }
    }

    let len = dp[n][m];
    let i =n;
    let j = m;
    let subS= new Array(len);
    let index = len-1;

    while(i> 0 && j > 0){
        
        if(str1[i-1]== str2[j-1]){
            subS[index]= str1[i-1];
            index--;
            i--;
            j--;
        } else if(dp[i-1][j] >dp[i][j-1]){
            i--;
        } else {
            j--
        }
    }

    return { length: len , string: subS.join("")};


 }


 console.log(subSequence("abcde","bdegk"));
