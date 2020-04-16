/*
Take the product of right and left side relative to current position and multiply them 
*/

var productExceptSelf = function(nums) {
    //take the left product 
    var ans = [];    
    ans[0] = 1;
    var rightProduct = 1;
    for(var i=1; i<nums.length; i++){
        ans[i] = ans[i-1] * nums[i-1]; //1234 -> 1126
    }
    // console.log(ans);
    var rightProduct = 1;
    for(var i=nums.length-1; i>=0; i--){ //1234 -> 24,12,4,1 -> rightProduct
        ans[i] = ans[i] * rightProduct;
        rightProduct *= nums[i]; 
    }
    return ans;
};

/* Below is the solution using 2 extra arrays
var productExceptSelf = function(nums) {
     //take the left product 
    var leftArr = [];
    var rightArr = [];
    var ans = [];    
    leftArr[0] = 1;
    rightArr[nums.length - 1] = 1;
    for(var i=1; i<nums.length; i++){
        leftArr[i] = leftArr[i-1] * nums[i-1]; //1234 -> 1126
    }
    for(var i=nums.length-2; i>=0; i--){ //1234 -> 24,12,4,1
        rightArr[i] = rightArr[i+1] * nums[i+1];
    }
    //console.log(rightArr)
    for(var i=0; i<nums.length; i++){
        ans[i] = leftArr[i] * rightArr[i];
    }
    return ans;
};
*/
