var minOperations = function(nums, k) {
    let count = 0;
    nums.sort((a, b) => a - b);
    
    while (nums.length >= 2 && nums[0] < k) {
        let first = nums.shift();
        let second = nums.shift();
        let compute = Math.min(first, second) * 2 + Math.max(first, second);
        insertIntoSorted(nums, compute);
        count++;
    }
    
    return count;
};

function insertIntoSorted(array, value) {
    let left = 0;
    let right = array.length;
    
    while (left <= right) {
        if (right - left === 1) {
            array.splice(right, 0, value);
            return;
        }
        
        let mid = left + Math.floor((right - left) / 2);
        
        if (array[mid] === value) {
            array.splice(mid, 0, value);
            return;
        } else if (array[mid] < value) {
            left = mid;
        } else {
            right = mid;
        }
    }
    
    array.splice(left, 0, value);
}

let nums = [1,1,2,4,9];
let k = 20;

console.log(minOperations(nums,k));