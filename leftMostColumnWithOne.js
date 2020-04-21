var leftMostColumnWithOne = function(binaryMatrix) {
    var dims = binaryMatrix.dimensions();
    var res = -1;
    var rowLen = dims[0];
    var colLen = dims[1];
    var curRow = 0;
    var curCol = colLen - 1;
    while(curRow < rowLen && curCol >= 0){
        if(binaryMatrix.get(curRow, curCol) == 1){
            res = curCol;
            curCol--;
        }
        else{
            curRow++;
        }        
    }
    return res;
};
