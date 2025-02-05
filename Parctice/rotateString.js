function rotateString(s, goal) {
    
    for(let i =0; i < s.length; i++){
        
        let sh = String(s).
        s=s+sh;
        if(s === goal){
            return true;
        }

    }
    return false;
    
};


console.log(rotateString('abcde','cdeab'))