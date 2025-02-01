function minimizeMaximumNoOfProduct( n , quantities){
    
    let totalProduct= 0;

    quantities.sort((a,b)=> a-b);
    if(n == quantities.length){

        return quantities[quantities.length -1];
    }

    for(let i =0; i < quantities.length;i++){
        totalProduct += quantities[i]
    }

    let maxProduct=0;
    while(n >0){

        if( Math.floor(totalProduct / n) ==0){
            maxProduct = Math.max(maxProduct, assign)
            break;
        } else {
            let assign = Math.floor(totalProduct / n);
            maxProduct = Math.max(maxProduct, assign)
            totalProduct= totalProduct-assign;
            n--;
        }
    }

    return maxProduct
}


const stores = 2;
const products= [5,7];

minimizeMaximumNoOfProduct(stores, products)