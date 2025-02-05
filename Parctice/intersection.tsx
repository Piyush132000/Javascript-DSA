function intersection(nums1: number[], nums2: number[]): number[] {

    if(nums1.length < nums2.length) return intersection(nums2, nums1);
    
    let arr = new Set<number>();
    nums2.forEach((num:number)=>{
        if(nums1.includes(num)){
            arr.add(num)
        }
    })

return [...arr];

};