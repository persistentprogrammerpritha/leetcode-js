var minPathSum = function(grid) {
   /* 
   1. Get the accumulated sum of the first row
   2. Get the accumulated sum of the first col
   3. Make a decision for the sums in the middle by picking the min value
   4. Return the end of the path
   */
    if(grid == null|| grid.length == 0) return grid;
    var rowLen = grid.length;
    var colLen = grid[0].length;

    for(var i=1; i<rowLen; i++){
        grid[i][0] += grid[i-1][0];
    }
    /*
    [ 
        [ 1, 3, 1 ], 
        [ 2, 5, 1 ], 
        [ 6, 2, 1 ] 
    ]
    */
    for(var j=1; j<colLen; j++){
        grid[0][j] += grid[0][j-1];
    }
     /*
    [ 
        [ 1, 4, 5 ], 
        [ 2, 5, 1 ], 
        [ 6, 2, 1 ] 
    ]
    */  
    for(var i=1; i<rowLen; i++){
        for(var j=1; j<colLen; j++){
            grid[i][j] += Math.min(grid[i-1][j], grid[i][j-1]);
        }
    }
    return grid[rowLen-1][colLen-1];
};
