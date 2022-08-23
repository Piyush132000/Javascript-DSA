

function checkPalindrom(str) {

    function charcter(i , n){
        if( i >= str.length/2 ){
            return true;
        }
        if( str[i] !== str[str.length-i-1]){
            return false;
        }
      return  charcter(i+1 , n)


    }

    return charcter(0 , str.length-1);
    

}

console.log(checkPalindrom("M"));