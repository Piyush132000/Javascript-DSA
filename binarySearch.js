function binarySearch(array, find) {
    let left = array[0];
    let right = array[array.length - 1];
  
    if(right < find){
        return -1;
    }

    while (left <= right) {
        console.log(left, right);
        let mid = left + (right - left) / 2;

        if (array[mid] == find) {
            return mid;
        }

        if (array[mid] > find) {
            left++;
            right = mid - 1;
        }

        if (array[mid] < find) {
            left = array[mid] + 1;
            right--;
        }
    }

    return -1;
}



let array = [ 1, 2,3,4,5,6,7,8,9];

console.log(binarySearch(array, 10))