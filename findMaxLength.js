var findMaxLength = function(nums) {
    /*
    1. Have a map/dictionary to update partial sum of +1 or -1
    2. Get the distance between the current index and stored index in the map
    3. Find the max of that distance
    */
    var map = {'0': -1}; 
    var distance = 0;
    var partialSum = 0;
    var maxLen = 0;

    for(var i=0; i<nums.length; i++){
        if(nums[i] == 1){
            partialSum++;
        }
        else{
            partialSum--;
        }
        if(map[partialSum] == undefined){
            map[partialSum] = i;
        }
        else{
            distance = i - map[partialSum];
            maxLen = Math.max(maxLen, distance);
        }
    }
    return maxLen;   
};
