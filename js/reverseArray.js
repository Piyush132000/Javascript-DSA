

function reverseArray(array){

    let i=0;
    let j = array.length-1;
    while(i < j){
        let temp = array[i];
        array[i]= array[j];
        array[j]= temp
        i++;
        j--;
        if( i == j & array[i] !=array[j]){
            let temp = array[i];
            array[i]= array[j];
            array[j]= temp
        }
    }

    return array;

}


function checkPalindrom(str1){
    const str = reverseArray(str1.split("")).join("");
    if( str1 == str){
        return true;
    }else{
        return false;
    }
}

let array = [7 , 8 ,9 ,6 , 5];
console.log(reverseArray(array));

console.log(checkPalindrom("TomiT"))