var canConstruct = function(ransomNote, magazine) {
    var ransomMap = {};
    var magMap = {};
    for(var i=0; i<ransomNote.length; i++){
        var nchar = ransomNote[i]
        if(ransomMap[nchar] == undefined){
            ransomMap[nchar] = 1;
        }
        else{
             ransomMap[nchar]++;
        }
    }
    for(var i=0; i<magazine.length; i++){
        var mchar = magazine[i]
        if(magMap[mchar] == undefined){
            magMap[mchar] = 1;
        }
        else{
            magMap[mchar]++;
        }
    }
    for(var i=0; i<ransomNote.length; i++){
        var ch = ransomNote[i];
        if(magMap[ch] == undefined || magMap[ch] < ransomMap[ch]){
            return false;
        }
    }
    return true;
};
