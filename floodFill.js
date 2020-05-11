var floodFill = function(image, sr, sc, newColor) {
    if(image == null || image[sr][sc] == newColor){
        return image;
    }
    fill(image, sr, sc,image[sr][sc], newColor)
    return image;
};

function fill(image, r, c, initial, newColor){
    if(r<0 || r >= image.length || c<0 || c>= image[0].length || image[r][c] != initial){
        return;
    }
    image[r][c] = newColor;
    fill(image, r+1, c,initial, newColor);
    fill(image, r, c+1,initial, newColor);
    fill(image, r-1, c,initial, newColor);
    fill(image, r, c-1,initial, newColor);
}
