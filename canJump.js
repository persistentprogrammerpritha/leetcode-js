var canJump = function(nums) {
    var maxSteps = nums[0];
    for(var i=1; i<nums.length; i++){
        if(maxSteps < i){
            return false;
        }
       maxSteps  = Math.max(maxSteps, nums[i] + i);
    }
    return true;
};
