// Longest Palindromic Substring Problem ========-----------------==========

var longestPalindrome = function(s) {
    let palindromFound = false;
    let finalString = "";
    if (s.length <= 1 || (s.length == 2 && s[0] !== s[1])) {
        finalString = s[0];
    }else{
        for(let i=0; i <= s.length; i++){
            finalString = s[i];
            let partialValue = "";
            for(let j=i+1; j <= s.length; j++){
                partialValue = partialValue + s[j]
                if(s[j] === finalString){
                    palindromFound = true;
                    break;
                }
            }
            if(palindromFound === true) break;
        }
    }
    return finalString;
};


console.log(longestPalindrome("aa"));

