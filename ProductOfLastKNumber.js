
var ProductOfNumbers = function() {
    this.arr =[];
    this.product=1;
    
    
};

/** 
 * @param {number} num
 * @return {void}
 */
ProductOfNumbers.prototype.add = function(num) {
    this.arr.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function(k) {

    for(let i =this.arr.length-1; i >= this.arr.length-k; i--){

        this.product *= this.arr[i]
    }

    return this.product
    
};

/** 
 * Your ProductOfNumbers object will be instantiated and called as such:
 * var obj = new ProductOfNumbers()
 * obj.add(num)
 * var param_2 = obj.getProduct(k)
 */