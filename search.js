var search = function(nums, target) {
    /*
    1. Find out which part of the array is sorted 
    2. Check if the target is in that part of the array 
    3. Else target is in unsorted part of array
    
    target = 5
    [4,5,6,7,0,1,2]
    4,5,6
    4
    
    
    target = 2 
    [4,5,6,7,0,1,2]
    0,1,2
    2
    
    */
    var left = 0;
    var right = nums.length -1;
    
    while(left <= right){
        var mid = Math.floor((left+right)/2);
        //console.log(nums[mid]);
        if(nums[mid] == target){
            return mid; 
        }
        else if(nums[left] <= nums[mid]){
            if(nums[left] <= target && target <= nums[mid]){
                right = mid - 1;
            }
            else{
                left = mid + 1;
            }
        }
        else{
            if(nums[mid] <= target && target <= nums[right]){
                left = mid + 1;
            }
            else{
                right = mid - 1;
            } 
        }
    }
    return -1;
};
