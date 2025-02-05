//Longest Substring Without repeating characters


function longestSubString( str){

    let left =0;
    let max = 0;
    let set = new Set();
    let i =0;

    if(str.length == 0) return 0;
    if(str.length === 1) return 1;
    

    for( let i =0; i < str.length; i++){

        while(set.has(str[i])){
            set.delete(str[left]); 
            left++;  
        }
        set.add(str[i]);
        max = Math.max(max , i-left+1)
    }

    return max;
}


console.log(longestSubString("pwwkqw"))