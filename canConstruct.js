var canConstruct = function(ransomNote, magazine) {
    var magMap = {};
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
        var ch = ransomNote[i]
        if(magMap[ch] == undefined || magMap[ch] == 0){
            return false;
        }
        else{
            magMap[ch]--;
        }
    }
    return true;
    /* Two Map Solution
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
    console.log(ransomMap)
    for(var i=0; i<ransomNote.length; i++){
        var ch = ransomNote[i];
        if(magMap[ch] == undefined || magMap[ch] < ransomMap[ch]){
            return false;
        }
    }
    return true;
*/
};
