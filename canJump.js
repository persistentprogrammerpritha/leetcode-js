var canJump = function(nums) {
    var maxSteps = nums[0];
    var lastStep = nums.length -1;
    for(var i=1; i<nums.length; i++){
        if(maxSteps < i){
            return false;
        }
        if(maxSteps == nums[lastStep]){
            return true;
        }
       maxSteps  = Math.max(maxSteps, nums[i] + i);
    }
    return true;
};
