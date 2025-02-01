function  takeChar(s, k){
   
    let count =[0,0,0]

    for(let i =0; i < s.length; i++){
       count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        
    }

    if (Math.min(...count) < k) {
        return -1;
    }
   let left =0;
   let max = Infinity;

   for(let i =0; i < s.length; i++){

    count[s[i].charCodeAt(0)- 'a'.charCodeAt(0)]--;

    while(Math.min(...count) < k){
        count[s.charCodeAt(left) - 'a'.charCodeAt(0)]++;
        left++;
    }

    max= Math.min(max, s.length - ( i -left +1));


   }

   return  max;

}

console.log(takeChar('aabaaaacaabc', 2));