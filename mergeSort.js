

function mergeSort(array, left, right) {

    if (left >= right) {
        return;
    }

    let mid = left + parseInt((right - left) / 2);

    mergeSort(array, left, mid);
    mergeSort(array, mid + 1, right);
    merge(array, left, mid, right);
    return array;
}

function merge(array, left, mid, right) {
    let n1 = mid - left + 1;
    let n2 = right - mid;

    let L1 = new Array(n1);
    let L2 = new Array(n2);

    for (let i = 0; i < n1; i++) {
        L1[i] = array[i + left];
    }

    for (let j = 0; j < n2; j++) {
        L2[j] = array[mid + 1 + j];
    }

    let i = 0;
    let j = 0;
    let k = left;
    while (i < n1 && j < n2) {

        if (L1[i] <= L2[j]) {
            array[k] = L1[i];
            i++;
        } else {
            array[k] = L2[j];
            j++;
        }
        k++;
    }

    while (i < n1) {
        array[k] = L1[i];
        i++;
        k++
    }

    while (j < n2) {
        array[k] = L2[j];
        i = j++;
        k++
    }

}




console.log(mergeSort([2, 3, 4, 5, 6, 3, 4, 3, 2, 1, 3], 0, 10));