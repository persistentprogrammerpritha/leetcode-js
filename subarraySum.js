var subarraySum = function(nums, k) {
    /* 
    1. Have a map to keep our running sums
    2. if runningSum - k is in the map increament total
    3. If same running sum encountered again add frequency
    4. Else add to map
    */
    var map = new Map();
    map.set(0,1);
    var total = 0;
    var runningSum = 0;
    for(var i=0; i<nums.length; i++){
        runningSum += nums[i];
        //console.log(runningSum)
        if(map.has(runningSum-k)){
            //console.log(runningSum-k)
            total += map.get(runningSum-k);
        }
        if(map.has(runningSum)){
            map.set(runningSum, map.get(runningSum)+1);
        }
        else{
            map.set(runningSum,1);
        }
    }
    return total;
};
