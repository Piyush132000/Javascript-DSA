class RotationArray {

    rotate( array , d){

        for( let i =0 ; i < d; i++){
            let val = array.shift();
            array.push(val);
        }

        return array;
    }
}


const obj = new RotationArray();


console.log(obj.rotate([1,2,3,4,5,6,7],3))