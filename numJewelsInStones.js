var numJewelsInStones = function(J, S) {
    var set = new Set(J);
    var total = 0;
    for(var i=0; i<S.length;i++){
        if(set.has(S[i])){
            total++;
        }
    }
    return total;
};

/* BRUTE FORCE

var numJewelsInStones = function(J, S) {
    var total = 0;
    for(var i=0; i<S.length;i++){
       for(var j=0; j<J.length;j++){ 
           if(S[i] == J[j]){
               total++;
           }
        }
    }
    return total;
};    
*/
