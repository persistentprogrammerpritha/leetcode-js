var lastStoneWeight = function(stones) {
    //at each iteration pick 2 max 
    //find the difference of the two max 
    //replace those positions with the diff 
    if(stones.length == 1){
        return stones[0];
    }
    while(stones.length > 1){
        stones.sort((a,b) => a-b);
        var diff = stones.pop() - stones.pop(); 
        stones.push(diff);
    }
    return stones[0];
};
