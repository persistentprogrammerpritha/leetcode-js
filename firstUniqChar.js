var firstUniqChar = function(s) {
    var uniMap = {};
    for(var i= 0; i<s.length;i++){
        if(uniMap[s[i]] == undefined){
            uniMap[s[i]] = true;
        }
        else{
            uniMap[s[i]] = false;
        }
    }
    for(var i=0; i<s.length;i++){
        if(uniMap[s[i]]){
            return i;
        }
    }
    return -1;
};
