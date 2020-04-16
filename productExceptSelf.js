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
