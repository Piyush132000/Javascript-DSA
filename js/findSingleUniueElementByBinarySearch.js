function findSingleElementByBinarySearch(arr){
    let low = 0, high = arr.length - 1;
    let mid;
    while (low <= high) {
        mid = (low + high) / 2;
        if (arr[mid] == arr[mid ^ 1]) {
            low = mid + 1;
        }
        else {
            high = mid - 1;
        }
    }
    return arr[low];
}

    let arr = [ 2, 3, 2, 5, 5, 3, 4 ];
    let size = arr.length;
    arr = arr.sort(function(a,b){return a-b})

console.log(findSingleElementByBinarySearch(arr))
