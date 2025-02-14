 function findMedianSortedArrays(nums1: number[], nums2: number[]): number {

    let mergedArray = new Array(nums1.length+ nums2.length);
    let n1 = nums1.length;
    let n2 = nums2.length;
    let i =0;
    let j =0;
    let k =0;
    while( i < n1 && j<n2){
       
        if(nums1[i] <= nums2[j]){
            mergedArray[k] = nums1[i];
            i++
        } else {
            mergedArray[k]= nums2[j];
            j++;
        }
        k++;
    }


    while(i < n1){
        mergedArray[k] = nums1[i];
        i++;
        k++;
    }

    while(j < n2){
        mergedArray[k] = nums2[j];
        j++;
        k++;
    }

    let left =0;
    let right = mergedArray.length-1;

    while(left < right){
        left++;
        right--;
    }

    return (mergedArray[left]+mergedArray[right])/2



   
    
};
let nums1:number[] = [1];
let nums2:number[] = []
console.log(findMedianSortedArrays(nums1, nums2));